import React, { FC, useState } from 'react';

import { Screen } from './components/Screen';
import { Header } from './components/Header';
import { StartGameScreen } from './screens/StartGameScreen';
import { GameScreen } from './screens/GameScreen';

const App: FC = () => {
  const [userNumber, setUserNumber] = useState<number>();

  const startGameHandler = (selectedNumber: number): void => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />;
  }

  return (
    <Screen>
      <Header title="Guess a Number" />
      {content}
    </Screen>
  )
};

export default App;
