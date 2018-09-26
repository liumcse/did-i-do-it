import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import { PersonOutline as RoleIcon } from '@material-ui/icons';
// import InputAdornment from '@material-ui/core/InputAdornment';
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

const EditApplication = props => {
  const { classes, index } = props;
  const {
    data: { company, role, applyDate, location, status, memo },
  } = props;
  const edit = () => {
    props.editApplication(index, {
      ...props.data,
      company: company,
      role: document.querySelector('#role').value,
      applyDate: document.querySelector('#applyDate').value,
      location: document.querySelector('#location').value,
      status: document.querySelector('#status').value,
      memo: document.querySelector('#memo').value,
    });
    props.handleClose();
  };
  const remove = () => {
    props.removeApplication(index);
    props.handleClose();
  };

  return (
    <Dialog
      open
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Edit Application</DialogTitle>
      <DialogContent>
        <DialogContentText>You are applying to - {company}</DialogContentText>
        <form className={classes.container}>
          <TextField
            className={classes.textField}
            margin="dense"
            id="role"
            label="Role"
            type="text"
            fullWidth
            defaultValue={role}
            placeholder="Example: Researcher"
          />
          <TextField
            className={classes.textField}
            margin="dense"
            id="applyDate"
            label="Apply Date"
            type="text"
            fullWidth
            defaultValue={applyDate}
            placeholder="Example: July 4, 2018"
          />
          <TextField
            className={classes.textField}
            margin="dense"
            id="location"
            label="Location"
            type="text"
            fullWidth
            defaultValue={location}
            placeholder="Example: San Diego, CA"
          />
          <TextField
            className={classes.textField}
            margin="dense"
            id="status"
            label="Status"
            type="text"
            fullWidth
            defaultValue={status}
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
            defaultValue={memo}
            placeholder="Example: Summer 2019"
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={edit} color="primary">
          Apply
        </Button>
        <Button onClick={remove} color="secondary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

EditApplication.propTypes = {
  index: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  editApplication: PropTypes.func.isRequired,
  removeApplication: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(EditApplication);
