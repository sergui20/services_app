import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers/index';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

// Stacks
import AppNavigator from './src/stacks/index';

const Navigation = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}

export default App;

// StatusBar
