import { View, Text, StyleSheet } from 'react-native';
import { Colors } from './colors';
import { Link } from 'expo-router';

export default function ThankYou() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Köszönjük a visszajelzést!</Text>
      <Link href="/" style={{ marginTop: 20 }}>
        <Text style={{ color: Colors.primary, fontSize: 18 }}>Vissza a főoldalra</Text> 
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  message: {
    fontSize: 24,
    color: Colors.text,
  },
});
