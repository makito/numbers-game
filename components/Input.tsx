import React, { FC } from 'react'
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface Props extends TextInputProps {}

export const Input: FC<Props> = props => (
  <TextInput {...props} style={[styles.input, props.style]} />
)

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10
  }
});
