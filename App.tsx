import React, { FC, useState } from 'react';

import { Screen } from './components/Screen';
import { Header } from './components/Header';
import { StartGameScreen } from './screens/StartGameScreen';
import { GameScreen } from './screens/GameScreen';
import { GameOverScreen } from './screens/GameOverScreen';

const App: FC = () => {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = (selectedNumber: number): void => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (numOfRounds: number): void => {
    setGuessRounds(numOfRounds);
  };

  const configureNewGameHandler = (): void => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  } else if (guessRounds > 0) {
    content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber as number} onNewGame={configureNewGameHandler} />;
  }

  return (
    <Screen>
      <Header title="Guess a Number" />
      {content}
    </Screen>
  )
};

export default App;
