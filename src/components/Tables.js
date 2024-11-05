import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, registeredElectors, totalPolledVotes, totalValidVotes, totalRejectedVotes) {
  return { name, registeredElectors, totalPolledVotes, totalValidVotes, totalRejectedVotes };
}

const rows = [
  createData('Anura', 159, 6.0, 24, 4.0),
  createData('Sajith', 237, 9.0, 37, 4.3),
  createData('Ranil', 262, 16.0, 24, 6.0),
  createData('Namal', 305, 3.7, 67, 4.3),
];

export default function Tables() {
  return (
    <Box sx={{ px: 8, py: 5 }}> {/* Add padding on both sides and top/bottom */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Election (2024)</StyledTableCell>
              <StyledTableCell align="right">Registered Electors</StyledTableCell>
              <StyledTableCell align="right">Total Polled Votes</StyledTableCell>
              <StyledTableCell align="right">Total Valid Votes</StyledTableCell>
              <StyledTableCell align="right">Total Rejected Votes</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.registeredElectors}</StyledTableCell>
                <StyledTableCell align="right">{row.totalPolledVotes}</StyledTableCell>
                <StyledTableCell align="right">{row.totalValidVotes}</StyledTableCell>
                <StyledTableCell align="right">{row.totalRejectedVotes}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
