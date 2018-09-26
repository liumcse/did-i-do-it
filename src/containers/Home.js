import React from 'react';
import { connect } from 'react-redux';
import { Sort as SortIcon, Add as AddIcon } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import NewApplicationModal from '../components/NewApplicationModal';
import TableView from '../components/TableView';
import { newApplication } from '../actions';

class Home extends React.Component {
  state = {
    modalOpen: false,
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="header">
            DID I<br />
            DO IT
          </div>
          <div className="search-container">
            <SortIcon className="svg-sort" />
            <input className="add-company" placeholder="Add a company..." />
            <IconButton
              className="button-add"
              aria-label="Add"
              size="small"
              onClick={this.openModal}
            >
              <AddIcon />
            </IconButton>
            <NewApplicationModal
              companyName="Google"
              newApplication={this.props.newApplication}
              open={this.state.modalOpen}
              handleClose={this.closeModal}
            />
          </div>
        </div>
        <div className="table-container">
          <TableView data={this.props.applicationList} />
        </div>
        <div className="poem">
          Did you do it?
          <br />
          Oh no I didn't
          <br />
          Did you do it?
          <br />
          You gotta be kidding
        </div>
        <div className="footer">
          <div className="links">
            <div>
              <a href="#">Github</a>
            </div>
            <div />
            <div>
              <a href="#">Facebook</a>
            </div>
            <div />
            <div>
              <a href="#">Author</a>
            </div>
          </div>
          <div className="copyright">2018 DIDI</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  applicationList: state && state.applicationList,
});

const mapDispatchToProps = dispatch => ({
  newApplication: data => dispatch(newApplication(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
