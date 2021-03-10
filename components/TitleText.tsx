import React, { FC } from 'react';
import { Text, StyleSheet } from 'react-native';

import fonts from '../constants/fonts';

export const TitleText: FC<{ style?: Object }> = ({ children, style }) => (
  <Text style={[styles.text, style]}>{children}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.bold,
    fontSize: 18
  }
});
