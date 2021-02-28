import React, { FC } from 'react';

import { Screen } from './components/Screen';
import { Header } from './components/Header';
import { StartGameScreen } from './screens/StartGameScreen';

const App: FC = () => (
  <Screen>
    <Header title="Guess a Number" />
    <StartGameScreen></StartGameScreen>
  </Screen>
);

export default App;
