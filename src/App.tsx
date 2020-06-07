import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
import store from './redux/store';
import './App.scss';
import Routes from "./routes";

const App: React.FC = () => {
  return (
      <Provider store={store}>
        <Router>
          <Routes/>
        </Router>
      </Provider>
  );
};

export default App;
