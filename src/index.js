import React from 'react';
import ReactDOM from 'react-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import {Sort, Add} from '@material-ui/icons'
import Button from '@material-ui/core/Button';
// import registerServiceWorker from './registerServiceWorker';

import TableView from "./components/TableView";

import './style.css';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="container">
        <div className="row">
          <div className="header">DID I<br/>DO IT</div>
          <div className="search-container">
            <Sort className="svg-sort" />
            <input className="add-company" placeholder="Add a company..." />
            {/* <Button className="button-add" variant="fab" color="primary" aria-label="Add" size="small"><Add /></Button> */}
            <Add className="svg-add" />
          </div>
        </div>
        <div className="table-container">
          <TableView />
        </div>
        <div className="poem">
          Did you do it?<br/>
          No I didn't<br/>
          Did you do it?<br/>
          Nah you gotta be kidding
        </div>
        <div className="footer">
          <div className="links">
            <div><a href="#">Github</a></div>
            <div />
            <div><a href="#">Facebook</a></div>
            <div />
            <div><a href="#">Author</a></div>
          </div>
          <div className="copyright">
            2018 DIDI
          </div>
        </div>
      </div>
    </React.Fragment>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));