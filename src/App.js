import React, { Component } from 'react';
import { createStore } from 'redux';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

const defaultState = {
  welcome: 'Hi',
  otherState: 'some stuff'
}

// reducer() is a function that take in the current state and determine which action to modify the state
// create a new state object with the "Modifying" state, DO NOT modify the actual data store
const greeting = (state = defaultState, action) => {
  switch (action.type) {
    case 'GREET_ME':
      return { ...state, welcome: `Hello ${action.result}` }  // ...state = get all the properties from the current state, then overwrite welcome state
    case 'GREET_WORLD':
      return { ...state, welcome: 'Hello World' }
    default:
      return state;
  }
};

const store = createStore(greeting);       // accept a function

const result = 'something coming back from an api';

// action is an object not a function. Description of what action to do
store.dispatch({
  type: 'GREET_ME',
  result   // == result: result
})


console.log(store.getState());