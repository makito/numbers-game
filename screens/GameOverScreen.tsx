import React, { FC } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export const GameOverScreen: FC<{ roundsNumber: number; userNumber: number; onNewGame: () => void }> = ({ roundsNumber, userNumber, onNewGame }) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds: {roundsNumber}</Text>
      <Text>Number was: {userNumber}</Text>
      <Button title="New Game" onPress={onNewGame} />
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
