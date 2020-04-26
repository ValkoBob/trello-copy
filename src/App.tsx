import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import TestComponent from "./components/TestComponent";

const App: React.FC = () => {
  return (
      <Provider store={store}>
        <TestComponent />
      </Provider>
  );
};

export default App;
