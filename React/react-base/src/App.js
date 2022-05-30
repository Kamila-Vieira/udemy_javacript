import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';
import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <Router navigator={history} location={history.location}>
        <Header />
        <Routes />
        <GlobalStyles />
      </Router>
    </Provider>
  );
}

export default App;
