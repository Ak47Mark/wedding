import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function MapScreen() {
  const region = {
    latitude: 47.48576114830926,
    longitude: 21.75287378795184,
    latitudeDelta: 0.5,  // Térkép zoom szint
    longitudeDelta: 0.5,
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={region}>
        {/* Marker például a helyszínhez */}
        <Marker coordinate={{ latitude: 47.526884970451356, longitude: 21.62963291878961 }} title="Szent Anna templom" description="Itt lesz az esküvő" />
        <Marker coordinate={{ latitude: 47.450416623972785, longitude: 21.90910972250052 }} title="Tanya" description="Polgári szertartás és lagzi" />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
