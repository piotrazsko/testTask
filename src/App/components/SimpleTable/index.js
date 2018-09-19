import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './style.css';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});


function SimpleTable(props) {
  const { classes, head_data, rows_data, headerClickHandler } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
              {head_data.map(
                    (item,index)=>{
                        return (
                            <TableCell className='simple_table__head-cell' onClick = {headerClickHandler} key = {index} key-attr = {item.key}>{item.name}</TableCell>
                        )
                    }
              )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows_data.map((row,index) => {
            return (
              <TableRow key={index}>
                  {(Object.keys(row)).map((key,index)=>{
                      if(key ==='photo'){
                          return <TableCell key = {index} ><img src = {`${row[key]}`} alt="No photo"/></TableCell>
                      }
                     return <TableCell key = {index} >{row[key]}</TableCell>
                  })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}


SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
  head_data:PropTypes.array.isRequired,
  rows_data:PropTypes.array.isRequired,
  headerClickHandler:PropTypes.func,
};
 SimpleTable.defaultProps = {
     classes:{},
     head_data:[],
     rows_data:[],
     headerClickHandler:()=>{}
 };

export default withStyles(styles)(SimpleTable);
