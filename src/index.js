import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './containers/Home';
import store from './store';
import './style.css';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Provider store={store}>
        <Home />
      </Provider>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
