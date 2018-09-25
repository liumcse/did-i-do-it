import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Help, Edit } from '@material-ui/icons';

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  actions: {
    color: "var(--text-main)",
    display: "grid",
    flexDirection: "row",
    gridTemplateColumns: "auto auto",
    gridColumnGap: "1rem",
  }
});

let id = 0;
function createData(company, apply_date, location, status) {
  id += 1;
  return { id, company, apply_date, location, status };
}

const rows = [
  createData("Uber", "Sept 25, 2018", "Seattle, WA", "Pending"),
  createData("Airbnb", "Sept 26, 2018", "San Francisco, CA", "No offer"),
  createData("Slack", "Sept 23, 2018", "Boston, MA", "No offer"),
  createData("Facebook", "Sept 26, 2018", "Multiple", "No offer")
];

function TableView(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
    {/* <Paper className={classes.root}> */}
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell>Apply date</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Status</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.company}
                </TableCell>
                <TableCell>{row.apply_date}</TableCell>
                <TableCell>
                  {/* <Button variant="contained">Dispatch</Button> */}
                  {row.location}
                </TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <div className={classes.actions}>
                    <Help />
                    <Edit />
                  </div></TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    {/* </Paper> */}
    </div>
  );
}

TableView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TableView);
