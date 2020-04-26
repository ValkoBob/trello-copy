import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import Routes from "./routes";

const App: React.FC = () => {
  return (
      <Provider store={store}>
        <Routes />
      </Provider>
  );
};

export default App;
