import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import FeaturedCarousel from '../components/FeaturedCarousel';
import ContentGrid from '../components/ContentGrid';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Featured big banner - top half */}
      <View style={styles.featured}>
        <FeaturedCarousel />
      </View>
      {/* Content grid - bottom half */}
      <View style={styles.grid}>
        <ContentGrid title="TENDENCIAS" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  featured: {
    flex: 1.4,
  },
  grid: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 4,
  },
});
