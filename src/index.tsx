import React from 'react';
import {Provider} from 'react-redux';
import Route from './routes';

import store from './store';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
};
