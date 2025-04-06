import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../colors';

export default function ProgramScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Esküvői program</Text>


      <View style={styles.event}>
        <Text style={styles.time}>15:30</Text>
        <Text style={styles.description}>Kapunyitás</Text>
      </View>

      <View style={styles.event}>
        <Text style={styles.time}>16:00</Text>
        <Text style={styles.description}>Szertartás a Szent Anna templomban</Text>
      </View>

      <View style={styles.event}>
        <Text style={styles.time}>16:45</Text>
        <Text style={styles.description}>Csoportkép</Text>
      </View>

      <View style={styles.event}>
        <Text style={styles.time}>18:30</Text>
        <Text style={styles.description}>Polgári szertartás a Tanyán</Text>
      </View>

      <View style={styles.event}>
        <Text style={styles.time}>19:00</Text>
        <Text style={styles.description}>Fotózás és gratulációk</Text>
      </View>

      <View style={styles.event}>
        <Text style={styles.time}>20:00</Text>
        <Text style={styles.description}>Vacsora & beszédek</Text>
      </View>

      <View style={styles.event}>
        <Text style={styles.time}>21:00</Text>
        <Text style={styles.description}>Első tánc & buli hajnalig 💃🕺</Text>
      </View>

      <Text style={styles.footer}>A program változhat, de az öröm garantált!</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background, // halvány világoskék háttér
    flexGrow: 1,
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primary, // világoskék
    marginBottom: 24,
    textAlign: 'center',
  },
  event: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.text,
    paddingBottom: 12,
  },
  time: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.primary,
  },
  description: {
    fontSize: 16,
    color: Colors.text,
    marginTop: 4,
  },
  footer: {
    marginTop: 40,
    fontSize: 14,
    textAlign: 'center',
    color: Colors.secondarytext,
  },
});
