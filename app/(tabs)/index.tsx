import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import FlowerFrame from '../flowerFrame';
import { Colors } from '../colors';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <FlowerFrame /> */}
      <Text style={styles.names}>Rita & Márk</Text>
      <Text style={styles.date}>2025. Augusztus 16.</Text>
      <Text style={styles.subtitle}>Szeretettel várunk az esküvőnkre!</Text>

      <Image
        source={require('../../assets/images/flower3.png')}
        style={styles.image}
      />

      <Text style={styles.footer}>Köszönjük, hogy részese vagy a nagy napunknak 💕</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background, // halvány világoskék háttér
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  names: {
    fontFamily: 'FleurDeLeah_400Regular',
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.primary, // világoskék
    marginBottom: 10,
  },
  date: {
    fontSize: 20,
    color: Colors.accent,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 30,
  },
  image: {
    width: 240,
    height: 240,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  footer: {
    fontSize: 14,
    color: Colors.secondarytext,
    textAlign: 'center',
    marginTop: 30,
  },
});
