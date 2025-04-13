import React from 'react';
import { View, StyleSheet, Dimensions, Platform, Alert, Linking } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Colors } from '../colors';
// import { useTheme } from '@react-navigation/native';

const Terkep = () => {
  const helyszin = {
    latitude: 47.48576114830926,
    longitude: 21.75287378795184,
    title: 'Rita és Márk',
  };

  const navigateTo = () => {
    const scheme = Platform.select({
      ios: 'maps://0,0?q=',
      android: 'geo:0,0?q=',
    });

    const latLng = `${helyszin.latitude},${helyszin.longitude}`;
    const label = encodeURIComponent(helyszin.title);
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url).catch(() => Alert.alert('Hiba', 'Nem sikerült megnyitni a térképet'));
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: helyszin.latitude,
          longitude: helyszin.longitude,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
        customMapStyle={customMapStyle}
      >
        <Marker coordinate={{ latitude: 47.526884970451356, longitude: 21.62963291878961 }} title="Szent Anna templom" description="Itt lesz az esküvő" />
        <Marker coordinate={{ latitude: 47.450416623972785, longitude: 21.90910972250052 }} title="Tanya" description="Polgári szertartás és lagzi" />
      </MapView>
    </View>
  );
};

const customMapStyle = [
  {
    elementType: 'geometry',
    stylers: [{ color: Colors.background }],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [{ color: Colors.text }],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#ffffff' }],
  },
  {
    featureType: 'water',
    stylers: [{ color: '#b3d9ff' }],
  },
  {
    featureType: 'poi.park',
    stylers: [{ color: '#ccf2e6' }],
  },
  {
    featureType: 'landscape',
    stylers: [{ color: '#f0f8ff' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: Colors.primary }],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#000000' }],
  },
  {
    featureType: 'transit.line',
    stylers: [{ color: Colors.accent }],
  },
  {
    featureType: 'transit.station',
    stylers: [{ color: '#e6e6e6' }],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Terkep;
