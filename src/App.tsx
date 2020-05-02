import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom'
import store from './redux/store';
import './App.scss';
import Routes from "./routes";
import {NavBar} from "./components/NavBar";

const App: React.FC = () => {
  return (
      <Provider store={store}>
          <div className="app-container">
              <Router>
                  <NavBar />
                  <Routes />
              </Router>
          </div>
      </Provider>
  );
};

export default App;
