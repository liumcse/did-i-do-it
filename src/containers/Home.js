import React from 'react';
import { connect } from 'react-redux';
import { Sort as SortIcon, Add as AddIcon } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
// import ModalContainer from '../components/ModalContainer';
import TableView from '../components/TableView';
import {
  addApplication,
  editApplication,
  removeApplication,
  showModal,
  hideModal,
} from '../actions';

class Home extends React.Component {
  state = {
    modalOpen: false,
    companyName: null,
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  handleInput = e => {
    this.setState({ companyName: e.target.value });
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
            <input
              id="add-company"
              className="add-company"
              placeholder="Add a company..."
              onChange={this.handleInput}
            />
            <IconButton
              className="button-add"
              aria-label="Add"
              size="small"
              onClick={() =>
                this.props.showModal('ADD_APPLICATION', {
                  companyName: this.state.companyName,
                  addApplication: this.props.addApplication,
                  handleClose: this.props.hideModal,
                })
              }
            >
              <AddIcon />
            </IconButton>
          </div>
        </div>
        <div className="table-container">
          {this.props.applicationList &&
            this.props.applicationList.length > 0 && (
              <TableView
                data={this.props.applicationList}
                editApplication={this.props.editApplication}
                removeApplication={this.props.removeApplication}
                showModal={this.props.showModal}
                hideModal={this.props.hideModal}
              />
            )}
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
              <a href="https://github.com/lyming90/did-i-do-it">Github</a>
            </div>
            <div />
            <div>
              <a href="https://csming.com">Author</a>
            </div>
            <div
              className="fb-like"
              data-href="https://didi.csming.com"
              data-layout="button_count"
              data-action="like"
              data-size="small"
              data-show-faces="true"
              data-share="false"
            />
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
  addApplication: data => dispatch(addApplication(data)),
  editApplication: (index, data) => dispatch(editApplication(index, data)),
  removeApplication: index => dispatch(removeApplication(index)),
  showModal: (modalType, modalProps) =>
    dispatch(showModal(modalType, modalProps)),
  hideModal: () => dispatch(hideModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
