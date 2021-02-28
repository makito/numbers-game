import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';

export const Screen: FC<{ style?: Object }> = ({ children, style }) => (
  <View style={[styles.screen, style]}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
