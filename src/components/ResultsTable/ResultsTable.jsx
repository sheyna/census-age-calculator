
// components
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Row from './Row';

import PropTypes from 'prop-types';

function ResultsTable({ agesData }) {

  let rows = [];
  if (agesData && agesData.length > 0) { 
    rows = agesData.map((oneCensus, idx) => {
      return (
        <Row key={idx} data={oneCensus}/>
      )
    });
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Census Name</TableCell>
            <TableCell align="right">Official Census Date</TableCell>
            <TableCell align="right">Age of Person on Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { rows }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ResultsTable;

ResultsTable.propTypes = {
  agesData: PropTypes.arrayOf(PropTypes.object)
}
