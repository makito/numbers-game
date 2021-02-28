import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';

export const Screen: FC = ({ children }) => (
  <View style={styles.screen}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
