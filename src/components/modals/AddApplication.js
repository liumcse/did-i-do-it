import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '1rem',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

const AddApplication = props => {
  const { classes, companyName } = props;
  const add = () => {
    props.addApplication({
      company: companyName,
      role: document.querySelector('#role').value,
      applyDate: document.querySelector('#applyDate').value,
      location: document.querySelector('#location').value,
      status: document.querySelector('#status').value,
      memo: document.querySelector('#memo').value,
    });
    props.handleClose();
  };

  return (
    <Dialog
      open
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">New Application</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You are applying to - {props.companyName}
        </DialogContentText>
        <form className={classes.container}>
          <TextField
            className={classes.textField}
            margin="dense"
            id="role"
            label="Role"
            type="text"
            fullWidth
            placeholder="Example: Researcher"
          />
          <TextField
            className={classes.textField}
            margin="dense"
            id="applyDate"
            label="Apply Date"
            type="text"
            fullWidth
            placeholder="Example: July 4, 2018"
          />
          <TextField
            className={classes.textField}
            margin="dense"
            id="location"
            label="Location"
            type="text"
            fullWidth
            placeholder="Example: San Diego, CA"
          />
          <TextField
            className={classes.textField}
            margin="dense"
            id="status"
            label="Status"
            type="text"
            fullWidth
            placeholder="Example: Interview"
          />
          <TextField
            className={classes.textField}
            margin="dense"
            id="memo"
            label="Memo"
            type="text"
            fullWidth
            multiline
            placeholder="Example: Summer 2019"
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={add} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AddApplication.propTypes = {
  // open: PropTypes.bool.isRequired,
  addApplication: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  companyName: PropTypes.string,
};

export default withStyles(styles)(AddApplication);
