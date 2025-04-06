import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Colors } from '../colors';

export default function RSVPForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attending, setAttending] = useState('yes');
  const [guests, setGuests] = useState('1');
  const [mealPreference, setMealPreference] = useState('');

  const handleSubmit = () => {
    // Itt a valós űrlap adatokat elküldheted valahová (pl. backend)
    Alert.alert('Köszönjük a visszajelzést!', 'Már fel is írtuk a nevét.');
    console.log({ name, email, attending, guests, mealPreference });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Visszajelzés</Text>

      <Text style={styles.label}>Név:</Text>
      <TextInput
        style={styles.input}
        placeholder="Írd be a neved"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>E-mail:</Text>
      <TextInput
        style={styles.input}
        placeholder="Írd be az e-mail címed"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Részvétel:</Text>
      <View style={styles.radioGroup}>
        <Text>Leszünk ott:</Text>
        <Button title="Igen" onPress={() => setAttending('yes')} />
        <Button title="Nem" onPress={() => setAttending('no')} />
      </View>

      <Text style={styles.label}>Hány fővel:</Text>
      <TextInput
        style={styles.input}
        placeholder="Hány fővel érkezel?"
        value={guests}
        onChangeText={setGuests}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Étkezési preferencia:</Text>
      <TextInput
        style={styles.input}
        placeholder="Pl. vegetáriánus, gluténmentes, stb."
        value={mealPreference}
        onChangeText={setMealPreference}
      />

      <Button title="Küldés" onPress={handleSubmit} color={Colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.background,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    color: Colors.text,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.accent,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 5,
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
