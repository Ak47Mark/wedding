import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Colors } from '../colors';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
// import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarActiveTintColor: Colors.primary, // világoskék
        tabBarInactiveTintColor: Colors.text,
        tabBarStyle: styles.tabBar
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'R&M',
          tabBarIcon: ({ color }) => <AntDesign size={26} name="heart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="program"
        options={{
          title: 'Programok',
          tabBarIcon: ({ color }) => <MaterialIcons size={26} name="schedule" color={color} />,
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: 'Helyszín',
          tabBarIcon: ({ color }) => <MaterialIcons size={26} name="map" color={color} />,
        }}
      />
      <Tabs.Screen
        name="form"
        options={{
          title: 'Visszajelzés',
          tabBarIcon: ({ color }) => <AntDesign size={26} name="form" color={color} />,
        }}
      />
    </Tabs>
  );
}

        const styles = StyleSheet.create({
          tabBar: {
            backgroundColor: Colors.background, // világoskék
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderColor: Colors.background,
            height: Platform.OS === 'ios' ? 90 : 70,
            position: 'absolute',
            bottom: 0,
            paddingBottom: Platform.OS === 'ios' ? 30 : 10,
            shadowColor: '#000',
            shadowOpacity: 0.0,
            shadowOffset: { width: 0, height: -2 },
            shadowRadius: 10,
            elevation: 5,
          },
        });
