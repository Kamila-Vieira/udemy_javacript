import React from 'react';
import { Router } from 'react-router-dom';
import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';
import history from './services/history';

function App() {
  return (
    <Router navigator={history} location={history.location}>
      <Header />
      <Routes />
      <GlobalStyles />
    </Router>
  );
}

export default App;
