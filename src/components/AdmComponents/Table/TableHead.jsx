import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';

class EnhancedTableHead extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columnData: this.props.columnData
    };
  }

  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  componentDidMount = () => {
    var pathname = window.location.pathname;
  
    this.state.columnData.map(elemt => {
      if (pathname === elemt.pathName) {
        return this.setState({ columnData: elemt.data});
      } else {
        return 'err'
      }
    })
  }

  render() {
    const { order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          {this.state.columnData.map((column,index) => {
            return (
              <TableCell
                key={index}
                numeric={column.numeric}
                padding={column.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === column.id ? order : false}
              >
                <Tooltip
                  key={column.id}
                  title="Sort"
                  placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    key={column.id}
                    active={orderBy === column.id}
                    direction={order}
                    onClick={this.createSortHandler(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default EnhancedTableHead;

