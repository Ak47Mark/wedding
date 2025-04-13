import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../colors';
import { useRouter } from 'expo-router';

export default function RSVPForm() {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState('');
  const [attending, setIsComing] = useState('');
  const router = useRouter();

  const scripUrl = 'https://script.google.com/macros/s/AKfycbyrBZX2TPMHCqa1g4PYZeiWyMcicz_DPOaS3sRSdaVZfx_con2SwrceCJTOeY-9jaDbYw/exec';

  const handleSubmit = async () => {
    if (!name.trim() || !guests.trim() || !attending.trim()) {
      Alert.alert('Hoppá!', 'Kérlek tölts ki minden mezőt.');
      return;
    }

    try {
      const response = await fetch(scripUrl, {
        redirect: "follow",
        method: 'POST',
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          name,
          guests,
          attending,
        }),
      });

      const result = await response.text();
      const a = JSON.parse(result);

      if (a.status === "success") {
        router.push('/thank-you');
      } else {
        Alert.alert('Hiba!', 'Valami hiba történt: ' + result);
      }
    } catch (error) {
      Alert.alert('Hiba!', 'Nem sikerült elküldeni: ' + error.message);
    }
  };

  const options = ['Igen', 'Nem'];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Név</Text>
      <TextInput value={name} onChangeText={setName} style={styles.input} />

      <Text style={styles.label}>Tudsz jönni?</Text>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={styles.radioOption}
          onPress={() => setIsComing(option)}
        >
          <View style={[styles.radioCircle, attending === option && styles.selected]}>
            {attending === option && <View style={styles.innerCircle} />}
          </View>
          <Text style={styles.radioLabel}>{option}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.label}>Hány fővel jössz?</Text>
      <TextInput value={guests} onChangeText={setGuests} style={styles.input} keyboardType="numeric" />

      <Text style={styles.label}>Étel intolerancia:</Text>
      <TextInput style={styles.input} placeholder='pl.: Laci: laktózérzékeny, Nóri: vegetáriánus'  placeholderTextColor={Colors.accent} />

      <Text style={styles.label}>Megjegyzés:</Text>
      <TextInput style={styles.input} multiline numberOfLines={4} />

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
  label: {
    marginTop: 10,
    fontWeight: 'bold',
    color: Colors.text,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.accent,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selected: {
    borderColor: Colors.primary,
  },
  innerCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: Colors.primary,
  },
  radioLabel: {
    fontSize: 16,
    color: Colors.text,
  },
});
