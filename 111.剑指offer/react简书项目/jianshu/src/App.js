import React, { Fragment } from 'react';
import { Body } from './style.js';
import { Provider } from 'react-redux';
import Header from './common/header';
import store from './store';

function App() {
  return (
    <Provider store={ store }>
      <Fragment>
        <Header></Header>
        hello world
      </Fragment>
    </Provider>
  );
}

export default App;
