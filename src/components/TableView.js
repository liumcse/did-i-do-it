import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import { Description as MoreIcon, Edit as EditIcon } from '@material-ui/icons';
import Modal from '@material-ui/core/Modal';

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

let id = 0;
function createData(company, role, apply_date, location, status) {
  id += 1;
  return { id, company, role, apply_date, location, status };
}

// const rows = [
//   createData("Uber", "Software Engineer", "Sept 25, 2018", "Seattle, WA", "Pending"),
//   createData("Airbnb", "Software Engineer", "Sept 26, 2018", "San Francisco, CA", "No offer"),
//   createData("Slack", "Front End Engineer", "Sept 23, 2018", "Boston, MA", "No offer"),
//   createData("Facebook", "Front End Engineer", "Sept 26, 2018", "Multiple", "No offer")
// ];

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
                  <IconButton className={classes.button} aria-label="more">
                    <MoreIcon />
                  </IconButton>
                  <IconButton className={classes.button} aria-label="edit">
                    <EditIcon />
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
};

export default withStyles(styles)(TableView);
