import React, { FC } from 'react';
import { StyleSheet, View, Image } from 'react-native';

import Colors from '../constants/colors';
import { BodyText } from '../components/BodyText';
import { TitleText } from '../components/TitleText';
import { MainButton } from '../components/MainButton';
import Fonts from '../constants/fonts';

export const GameOverScreen: FC<{ roundsNumber: number; userNumber: number; onNewGame: () => void }> = ({ roundsNumber, userNumber, onNewGame }) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/success.jpg')} style={styles.image} resizeMode="cover" />
      </View>
      <BodyText style={styles.text}>
        Your phone needed <BodyText style={styles.textAccent}>{roundsNumber}</BodyText> rounds to guess the number <BodyText style={styles.textAccent}>{userNumber}</BodyText>
      </BodyText>
      <MainButton onPress={onNewGame} style={styles.button}>New Game</MainButton>
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
  },
  button: {
    marginTop: 20
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    maxWidth: '80%'
  },
  textAccent: {
    color: Colors.accent,
    fontFamily: Fonts.bold
  }
});
