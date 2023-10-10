import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import PropTypes from 'prop-types';

function Row({ data }) {
  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {data.censusName}
      </TableCell>
      <TableCell align="right">
        {data.dateWritten}
      </TableCell>
      <TableCell align="right">
        {data.age}
      </TableCell>
    </TableRow>
  )
}

export default Row

Row.propTypes = {
  data: PropTypes.shape({
    age: PropTypes.number.isRequired,
    censusName: PropTypes.string.isRequired,
    censusDate: PropTypes.object.isRequired,
    dateWritten: PropTypes.string.isRequired,
  })
}
