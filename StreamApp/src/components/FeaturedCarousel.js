import React, { useState, useRef, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  ScrollView, Dimensions, Animated,
} from 'react-native';
import { colors } from '../theme/colors';
import { FEATURED_ITEMS } from '../data/mockData';

const { width } = Dimensions.get('window');
const CARD_W = width * 0.55;

export default function FeaturedCarousel() {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef(null);
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 1.08, duration: 800, useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 1, duration: 800, useNativeDriver: true }),
      ])
    );
    pulse.start();
    return () => pulse.stop();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const next = (current + 1) % FEATURED_ITEMS.length;
      setCurrent(next);
      scrollRef.current?.scrollTo({ x: next * CARD_W, animated: true });
    }, 4000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const idx = Math.round(e.nativeEvent.contentOffset.x / CARD_W);
          setCurrent(idx);
        }}
        style={styles.scroll}
      >
        {FEATURED_ITEMS.map((it, idx) => (
          <TouchableOpacity key={it.id} activeOpacity={0.9} style={styles.card}>
            <View style={[styles.cardBg, { backgroundColor: it.color1 }]}>
              <View style={[styles.cardBgOverlay, { backgroundColor: it.color2 }]} />
            </View>
            {idx === current && (
              <Animated.View style={[styles.glowRing, { transform: [{ scale: pulseAnim }] }]} />
            )}
            <View style={styles.cardContent}>
              <View style={styles.cardBadges}>
                <View style={styles.ratingBadge}><Text style={styles.ratingText}>⭐ {it.rating}</Text></View>
                <View style={styles.newBadge}><Text style={styles.newText}>NUEVO</Text></View>
              </View>
              <Text style={styles.cardTitle}>{it.title}</Text>
              <Text style={styles.cardGenre}>{it.genre}</Text>
              <View style={styles.cardActions}>
                <TouchableOpacity style={styles.playBtn}><Text style={styles.playBtnText}>▶  VER AHORA</Text></TouchableOpacity>
                <TouchableOpacity style={styles.infoBtn}><Text style={styles.infoBtnText}>+ Info</Text></TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.dots}>
        {FEATURED_ITEMS.map((_, i) => (
          <TouchableOpacity key={i} onPress={() => {
            setCurrent(i);
            scrollRef.current?.scrollTo({ x: i * CARD_W, animated: true });
          }}>
            <View style={[styles.dot, i === current && styles.dotActive]} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { flex: 1 },
  card: { width: CARD_W, height: '100%', overflow: 'hidden', position: 'relative' },
  cardBg: { ...StyleSheet.absoluteFillObject },
  cardBgOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%', opacity: 0.8 },
  glowRing: {
    position: 'absolute', top: '20%', left: '20%', right: '20%', bottom: '20%',
    borderRadius: 200, borderWidth: 2, borderColor: 'rgba(124,58,237,0.3)',
  },
  cardContent: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    padding: 16, backgroundColor: 'rgba(0,0,0,0.5)',
  },
  cardBadges: { flexDirection: 'row', gap: 6, marginBottom: 6 },
  ratingBadge: { backgroundColor: 'rgba(124,58,237,0.8)', borderRadius: 10, paddingHorizontal: 7, paddingVertical: 2 },
  ratingText: { color: '#fff', fontSize: 9, fontWeight: '700' },
  newBadge: { backgroundColor: colors.live, borderRadius: 10, paddingHorizontal: 7, paddingVertical: 2 },
  newText: { color: '#fff', fontSize: 9, fontWeight: '800', letterSpacing: 1 },
  cardTitle: { fontSize: 20, fontWeight: '900', color: '#fff', marginBottom: 2 },
  cardGenre: { fontSize: 10, color: 'rgba(255,255,255,0.7)', marginBottom: 10, letterSpacing: 1 },
  cardActions: { flexDirection: 'row', gap: 8 },
  playBtn: { backgroundColor: colors.accent, borderRadius: 20, paddingHorizontal: 14, paddingVertical: 7 },
  playBtnText: { color: '#fff', fontSize: 10, fontWeight: '800', letterSpacing: 1 },
  infoBtn: { borderWidth: 1, borderColor: 'rgba(255,255,255,0.4)', borderRadius: 20, paddingHorizontal: 14, paddingVertical: 7 },
  infoBtnText: { color: 'rgba(255,255,255,0.8)', fontSize: 10, fontWeight: '600' },
  dots: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 6, gap: 5, backgroundColor: 'rgba(0,0,0,0.4)' },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: 'rgba(255,255,255,0.3)' },
  dotActive: { width: 18, backgroundColor: colors.accent, borderRadius: 3 },
});
