import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './containers/Home';
import ModalContainer from './containers/ModalContainer';
import { store, persistor } from './configureStore';
import './style.css';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <React.Fragment>
            <Home />
            <ModalContainer />
          </React.Fragment>
        </PersistGate>
      </Provider>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
