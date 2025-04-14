const fs = require("fs");
const path = require("path");

// REKURZÍV FÁJLBEJÁRÁS
function walk(dir, callback) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file === 'node_modules') {
        const newPath = path.join(dir, 'storage');
        fs.renameSync(fullPath, newPath);
        callback(newPath);
        walk(newPath, callback);
      } else {
        walk(fullPath, callback);
      }
    } else {
      callback(fullPath);
    }
  });
}

// SZÖVEGCSERE AZ ÖSSZES FÁJLBAN
function replaceInFile(filePath) {
  if (!filePath.endsWith('.js') && !filePath.endsWith('.html') && !filePath.endsWith('.css')) return;

  let content = fs.readFileSync(filePath, 'utf8');
  const replaced = content.replace(/node_modules/g, 'storage');
  if (content !== replaced) {
    fs.writeFileSync(filePath, replaced);
    console.log('Updated:', filePath);
  }
}

// .nojekyll létrehozása
function createNoJekyll(distPath) {
  const filePath = path.join(distPath, '.nojekyll');
  fs.writeFileSync(filePath, '');
  console.log('Created .nojekyll');
}

// Futtatás
const distDir = path.join(__dirname, '..', 'dist');
walk(distDir, replaceInFile);
createNoJekyll(distDir);

console.log('✅ node_modules -> storage cserék kész!');
