import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../theme/colors';
import { LIVE_CHANNELS } from '../data/mockData';

export default function LiveChannelList({ onSelect, selected }) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {LIVE_CHANNELS.map((ch) => {
          const isSelected = selected === ch.id;
          return (
            <TouchableOpacity
              key={ch.id}
              style={[styles.channelItem, isSelected && styles.channelItemActive]}
              onPress={() => onSelect(ch.id)}
              activeOpacity={0.7}
            >
              <View style={[styles.logoBox, isSelected && styles.logoBoxActive]}>
                <Text style={styles.logoEmoji}>{ch.logo}</Text>
              </View>
              <View style={styles.channelInfo}>
                <Text style={[styles.channelName, isSelected && styles.channelNameActive]} numberOfLines={1}>
                  {ch.name}
                </Text>
                <View style={styles.statusRow}>
                  {ch.live ? (
                    <View style={styles.livePill}>
                      <View style={styles.liveDot} />
                      <Text style={styles.liveLabel}>EN VIVO</Text>
                    </View>
                  ) : (
                    <Text style={styles.offlineLabel}>Disponible</Text>
                  )}
                </View>
              </View>
              {isSelected && <Text style={styles.playingIcon}>▶</Text>}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgSidebar,
    borderLeftWidth: 1,
    borderLeftColor: colors.border,
  },
  channelItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  channelItemActive: {
    backgroundColor: 'rgba(124,58,237,0.15)',
  },
  logoBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: colors.bgCard,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  logoBoxActive: {
    borderColor: colors.accent,
  },
  logoEmoji: { fontSize: 18 },
  channelInfo: { flex: 1 },
  channelName: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: 3,
  },
  channelNameActive: {
    color: colors.textPrimary,
    fontWeight: '700',
  },
  statusRow: { flexDirection: 'row', alignItems: 'center' },
  livePill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(239,68,68,0.15)',
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 1,
    gap: 3,
  },
  liveDot: { width: 5, height: 5, borderRadius: 2.5, backgroundColor: colors.live },
  liveLabel: { fontSize: 8, fontWeight: '700', color: colors.live, letterSpacing: 0.5 },
  offlineLabel: { fontSize: 8, color: colors.textMuted },
  playingIcon: { color: colors.accent, fontSize: 12, marginLeft: 4 },
});
