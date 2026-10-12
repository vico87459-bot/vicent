import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { MENU_ITEMS } from '../data/mockData';

export default function Sidebar({ activeSection, onSelect }) {
  return (
    <View style={styles.sidebar}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoN}>N</Text>
        <Text style={styles.logoText}>EX{'\n'}<Text style={styles.logoSub}>STREAM</Text></Text>
      </View>

      {/* Menu */}
      <View style={styles.menu}>
        {MENU_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <TouchableOpacity
              key={item.id}
              style={[styles.menuItem, isActive && styles.menuItemActive]}
              onPress={() => onSelect(item.id)}
              activeOpacity={0.7}
            >
              {isActive && <View style={styles.activeBar} />}
              <Text style={styles.menuIcon}>{item.icon}</Text>
              <Text style={[styles.menuLabel, isActive && styles.menuLabelActive]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Bottom user */}
      <View style={styles.bottomUser}>
        <View style={styles.userAvatar}>
          <Text style={styles.userAvatarText}>U</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: 160,
    backgroundColor: colors.bgSidebar,
    borderRightWidth: 1,
    borderRightColor: colors.border,
    paddingTop: 16,
    paddingBottom: 16,
    justifyContent: 'space-between',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  logoN: {
    fontSize: 32,
    fontWeight: '900',
    color: colors.accent,
    marginRight: 4,
    textShadowColor: colors.accentGlow,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  logoText: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.textPrimary,
    lineHeight: 13,
    letterSpacing: 2,
  },
  logoSub: {
    color: colors.accentSecondary,
    fontSize: 9,
    letterSpacing: 3,
  },
  menu: {
    flex: 1,
    paddingTop: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 11,
    marginBottom: 2,
    position: 'relative',
    borderRadius: 0,
  },
  menuItemActive: {
    backgroundColor: 'rgba(124,58,237,0.12)',
  },
  activeBar: {
    position: 'absolute',
    left: 0,
    top: 6,
    bottom: 6,
    width: 3,
    backgroundColor: colors.accent,
    borderRadius: 0,
  },
  menuIcon: {
    fontSize: 14,
    marginRight: 10,
  },
  menuLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.textSecondary,
    letterSpacing: 1,
  },
  menuLabelActive: {
    color: colors.textPrimary,
  },
  bottomUser: {
    alignItems: 'center',
    paddingTop: 8,
  },
  userAvatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userAvatarText: {
    color: colors.textPrimary,
    fontWeight: '700',
    fontSize: 14,
  },
});
