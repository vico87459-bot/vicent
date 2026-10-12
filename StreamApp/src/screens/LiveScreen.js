import React, { useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { colors } from '../theme/colors';
import LiveChannelList from '../components/LiveChannelList';

export default function LiveScreen() {
  const [selected, setSelected] = useState('1');
  const selectedCh = { '1': 'La Granja VIP 1 HD', '2': 'La Granja VIP 2 HD',
    '3': 'ECDF', '4': 'ECDF FHD', '5': 'NBA Eventos', '6': 'A3S',
    '7': 'CNN en Español', '8': 'ESPN HD' }[selected] || 'Canal';

  return (
    <View style={styles.container}>
      {/* Video player area */}
      <View style={styles.player}>
        <View style={styles.playerInner}>
          {/* Loading spinner simulation */}
          <View style={styles.spinnerContainer}>
            <Text style={styles.spinnerEmoji}>📡</Text>
            <Text style={styles.loadingText}>Conectando...</Text>
            <Text style={styles.speedText}>5KB/S</Text>
          </View>
        </View>
        {/* Bottom bar */}
        <View style={styles.playerBar}>
          <Text style={styles.channelNameBar}>{selectedCh}</Text>
          <Text style={styles.fullscreenBtn}>⛶</Text>
        </View>
      </View>

      {/* Channel list */}
      <View style={styles.channelList}>
        <View style={styles.listHeader}>
          <Text style={styles.listHeaderText}>▲</Text>
        </View>
        <LiveChannelList selected={selected} onSelect={setSelected} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'row', backgroundColor: colors.bg },
  player: {
    flex: 1,
    backgroundColor: '#000',
    position: 'relative',
  },
  playerInner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerContainer: {
    alignItems: 'center',
    gap: 8,
  },
  spinnerEmoji: { fontSize: 40, opacity: 0.6 },
  loadingText: { color: colors.textSecondary, fontSize: 12 },
  speedText: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '600',
  },
  playerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  channelNameBar: { color: colors.textPrimary, fontSize: 11, fontWeight: '600' },
  fullscreenBtn: { color: colors.textSecondary, fontSize: 18 },
  channelList: {
    width: 220,
    backgroundColor: colors.bgSidebar,
    borderLeftWidth: 1,
    borderLeftColor: colors.border,
  },
  listHeader: {
    alignItems: 'center',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.bgCard,
  },
  listHeaderText: { color: colors.textSecondary, fontSize: 12 },
});
