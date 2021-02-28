import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Header: FC<{ title: string }> = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: '#3fd41a',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    color: 'black',
    fontSize: 18
  }
});
