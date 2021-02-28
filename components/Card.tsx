import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';

export const Card: FC<{ style?: Object }> = ({ children, style }) => (
  <View style={[styles.card, style]}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    elevation: 8,
    padding: 20,
    borderRadius: 10
  }
});
