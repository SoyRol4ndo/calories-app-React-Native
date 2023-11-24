import React from 'react';

import {Routes} from './src/routes/Routes';
import {FoodProvider} from './src/context/FoodProvider';

const App = () => {
  return (
    <FoodProvider>
      <Routes />
    </FoodProvider>
  );
};

export default App;
