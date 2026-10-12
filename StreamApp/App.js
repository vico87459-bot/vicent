import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Sidebar from './src/components/Sidebar';
import TopBar from './src/components/TopBar';
import HomeScreen from './src/screens/HomeScreen';
import LiveScreen from './src/screens/LiveScreen';
import { colors } from './src/theme/colors';

export default function App() {
  const [section, setSection] = useState('featured');

  const renderScreen = () => {
    if (section === 'live') return <LiveScreen />;
    return <HomeScreen />;
  };

  const sectionTitle = {
    live: 'EN VIVO',
    featured: 'DESTACADO',
    movies: 'PELÍCULAS',
    series: 'SERIES',
    kids: 'NIÑOS',
    anime: 'ANIME',
    explore: 'EXPLORAR',
  }[section] || 'NexStream';

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" backgroundColor={colors.bg} />
      <View style={styles.app}>
        {/* Sidebar */}
        <Sidebar activeSection={section} onSelect={setSection} />
        {/* Main content */}
        <View style={styles.main}>
          <TopBar title={sectionTitle} />
          <View style={styles.content}>
            {renderScreen()}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  app: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.bg,
  },
  main: {
    flex: 1,
    flexDirection: 'column',
  },
  content: {
    flex: 1,
  },
});
