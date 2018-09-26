import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import {
  /* Description as MoreIcon,*/ Edit as EditIcon,
} from '@material-ui/icons';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

function TableView(props) {
  const { classes, data } = props;

  return (
    <div className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Apply Date</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Status</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {data.sort((a, b) => a.weight - b.weight).map((row, index) => {
            return (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.company}
                </TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.applyDate}</TableCell>
                <TableCell>{row.location}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  {/* <IconButton className={classes.button} aria-label="more">
                    <MoreIcon />
                  </IconButton> */}
                  <IconButton className={classes.button} aria-label="edit">
                    <EditIcon
                      onClick={() =>
                        props.showModal('EDIT_APPLICATION', {
                          index: index,
                          data: row,
                          handleClose: props.hideModal,
                          editApplication: props.editApplication,
                          removeApplication: props.removeApplication,
                        })
                      }
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

TableView.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default withStyles(styles)(TableView);
