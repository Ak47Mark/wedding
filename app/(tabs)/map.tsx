import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { View } from 'react-native';
import { useMemo } from 'react';
import { Colors } from '../colors';

const center = {
  lat: 47.48576114830926,
  lng: 21.75287378795184,
};

export default function MapWeb() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
  });

  const containerStyle = useMemo(
    () => ({
      width: '100%',
      height: '100vh',
    }),
    []
  );

  if (!isLoaded) return <p>Térkép betöltése...</p>;

  return (
    <View style={{ flex: 1 }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={{
          disableDefaultUI: true,
          styles: [
              {
                elementType: 'geometry',
                stylers: [{ color: Colors.background }],
              },
              {
                elementType: 'labels.text.fill',
                stylers: [{ color: Colors.text }],
              },
              // {
              //   elementType: 'labels.text.stroke',
              //   stylers: [{ color: 'red' }],
              // },
              {
                featureType: 'water',
                stylers: [{ color: '#b3d9ff' }],
              },
              {
                featureType: 'landscape',
                stylers: [{ color: Colors.background }],
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: Colors.primary }],
              },
              {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: Colors.text }],
              },
              {
                featureType: 'transit.line',
                stylers: [{ color: Colors.accent }],
              },
              {
                featureType: 'transit.station',
                stylers: [{ color: '#e6e6e6' }],
              },
              {
                featureType: "poi",
                stylers: [{ visibility: "off" }],
              },
              {
                featureType: "transit",
                elementType: "labels.icon",
                stylers: [{ visibility: "off" }],
              },
          ],
        }}
      >
        <Marker position={{ lat: 47.526884970451356, lng: 21.62963291878961 }}
                title="Szent Anna templom"
                icon={{
                  path: google.maps.SymbolPath.CIRCLE,
                  fillColor: Colors.accent,
                  fillOpacity: 1,
                  strokeWeight: 2,
                  scale: 15, // méret
                }}
                onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=47.526884970451356,21.62963291878961', '_blank')}
        />
        <Marker position={{ lat: 47.450416623972785, lng: 21.90910972250052 }} 
                title="Tanya"
                icon={{
                  path: google.maps.SymbolPath.CIRCLE,
                  fillColor: Colors.accent,
                  fillOpacity: 1,
                  strokeWeight: 2,
                  scale: 15, // méret
                }}
                onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=47.450416623972785,21.90910972250052', '_blank')}
        />
      </GoogleMap>
    </View>
  );
}
