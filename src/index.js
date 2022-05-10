import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './App';
// styles
import 'normalize.css';
import './index.css';
// Redux
import { Provider } from 'react-redux';
import { store } from './store';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App tab="home" />
  </Provider>
);
