import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../theme/colors';
import { GRID_ITEMS } from '../data/mockData';

export default function ContentGrid({ title = 'TENDENCIAS' }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLine} />
        <Text style={styles.headerTitle}>{title}</Text>
        <View style={styles.headerLineFlex} />
        <TouchableOpacity>
          <Text style={styles.seeAll}>Ver todo →</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        {GRID_ITEMS.map((item) => (
          <TouchableOpacity key={item.id} style={styles.card} activeOpacity={0.8}>
            <View style={[styles.cardBg, { backgroundColor: item.color1 }]}>
              <View style={[styles.cardBgGrad, { backgroundColor: item.color2 }]} />
            </View>
            <View style={styles.badgeContainer}>
              <View style={styles.badge}><Text style={styles.badgeText}>{item.badge}</Text></View>
            </View>
            <View style={styles.cardBottom}>
              <Text style={styles.cardTitle} numberOfLines={2}>{item.title}</Text>
              <Text style={styles.cardGenre}>{item.genre}</Text>
            </View>
            <View style={styles.playOverlay}>
              <Text style={styles.playIcon}>▶</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingVertical: 8 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 8,
    gap: 8,
  },
  headerLine: { width: 3, height: 14, backgroundColor: colors.accent, borderRadius: 2 },
  headerLineFlex: { flex: 1 },
  headerTitle: { fontSize: 11, fontWeight: '800', color: colors.textPrimary, letterSpacing: 2 },
  seeAll: { fontSize: 10, color: colors.accentSecondary, fontWeight: '600' },
  scroll: {},
  scrollContent: { paddingHorizontal: 12, gap: 8 },
  card: {
    width: 110,
    height: 155,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: colors.bgCard,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardBg: { ...StyleSheet.absoluteFillObject },
  cardBgGrad: { position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', opacity: 0.9 },
  badgeContainer: { position: 'absolute', top: 6, right: 6 },
  badge: {
    backgroundColor: colors.accent,
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  badgeText: { color: '#fff', fontSize: 8, fontWeight: '800' },
  cardBottom: {
    position: 'absolute',
    bottom: 0, left: 0, right: 0,
    padding: 7,
    backgroundColor: 'rgba(0,0,0,0.65)',
  },
  cardTitle: { fontSize: 9, fontWeight: '800', color: '#fff', letterSpacing: 0.5 },
  cardGenre: { fontSize: 8, color: 'rgba(255,255,255,0.6)', marginTop: 2 },
  playOverlay: {
    position: 'absolute',
    top: '35%',
    left: '50%',
    marginLeft: -16,
    marginTop: -16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(124,58,237,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
  },
  playIcon: { color: '#fff', fontSize: 12 },
});
