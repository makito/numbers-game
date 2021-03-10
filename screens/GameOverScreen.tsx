import React, { FC } from 'react';
import { StyleSheet, View, Button, Image } from 'react-native';

import Colors from '../constants/colors';
import { BodyText } from '../components/BodyText';
import { TitleText } from '../components/TitleText';

export const GameOverScreen: FC<{ roundsNumber: number; userNumber: number; onNewGame: () => void }> = ({ roundsNumber, userNumber, onNewGame }) => {
  return (
    <View style={styles.screen}>
      <Button title="New Game" onPress={onNewGame} />
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/success.jpg')} style={styles.image} resizeMode="cover" />
      </View>
      <BodyText>Number of rounds: {roundsNumber}</BodyText>
      <BodyText>Number was: {userNumber}</BodyText>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary,
    width: 300,
    height: 300,
    overflow: 'hidden',
    marginVertical: 20
  }
});
