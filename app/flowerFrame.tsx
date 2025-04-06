import { View, Image, StyleSheet } from 'react-native';

const flowerImages = [
  require('../assets/images/flower1.png'),
  require('../assets/images/flower2.png'),
  require('../assets/images/flower3.png'),
];

// Létrehoz egy tömböt, amely tartalmazza az egyes virág pozícióját és típusát
function generateRandomFlowers(count: number) {
  return Array.from({ length: count }, () => ({
    top: Math.floor(Math.random() * 100) + 0, // 10% - 90% között
    type: Math.floor(Math.random() * flowerImages.length), // 0-2
    size: Math.floor(Math.random() * 140) + 30, // 30px - 50px közötti méret
  }));
}

const leftFlowers = generateRandomFlowers(4);
const rightFlowers = generateRandomFlowers(4);

export default function FlowerFrame() {
  return (
    <>
      {/* Bal oldal */}
      {leftFlowers.map((flower, index) => (
        <Image
          key={`left-${index}`}
          source={flowerImages[flower.type]}
          style={[
            styles.flower,
            {
              left: 0,
              top: `${flower.top}%`,
              width: flower.size,
              height: flower.size,
              transform: [{ rotate: '90deg' }],
            },
          ]}
        />
      ))}

      {/* Jobb oldal */}
      {rightFlowers.map((flower, index) => (
        <Image
          key={`right-${index}`}
          source={flowerImages[flower.type]}
          style={[
            styles.flower,
            {
              right: 0,
              top: `${flower.top}%`,
              width: flower.size,
              height: flower.size,
              transform: [{ rotate: '-90deg' }],
            },
          ]}
        />
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  flower: {
    position: 'absolute',
    zIndex: 10,
  },
});
