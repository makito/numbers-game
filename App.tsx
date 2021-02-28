import React, { FC } from 'react';

import { Screen } from './components/Screen';
import { Header } from './components/Header';

const App: FC = () => (
  <Screen>
    <Header title="Guess a Number" />
  </Screen>
);

export default App;
