import React, { FC } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Colors from '../constants/colors';
import Fonts from '../constants/fonts';

interface ButtonProps {
  style?: object;
  onPress: () => any;
}

export const MainButton: FC<ButtonProps> = ({ children, style, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={[styles.button, style]}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25
  },
  buttonText: {
    color: 'white',
    fontFamily: Fonts.regular,
    fontSize: 18
  }
});
