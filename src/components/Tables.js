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
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    padding: theme.spacing(1), // Reduced padding for compactness
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '0.875rem', // Smaller font size
    padding: theme.spacing(0.5), // Reduced padding for body cells
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 5, md: 8 },
        py: 5,
        overflowX: 'auto',
        maxWidth: '100%', // Ensure the table container doesn’t exceed the viewport width
      }}
    >
      <TableContainer component={Paper} sx={{ maxWidth: 600, margin: '0 auto' }}> {/* Limit table width */}
        <Table sx={{ minWidth: isMobile ? 300 : 500 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Election (2024)</StyledTableCell>
              <StyledTableCell align="right">Registered Electors</StyledTableCell>
              <StyledTableCell align="right">Total Polled Votes</StyledTableCell>
              {!isMobile && <StyledTableCell align="right">Valid Votes</StyledTableCell>}
              {!isMobile && <StyledTableCell align="right">Rejected Votes</StyledTableCell>}
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
                {!isMobile && <StyledTableCell align="right">{row.totalValidVotes}</StyledTableCell>}
                {!isMobile && <StyledTableCell align="right">{row.totalRejectedVotes}</StyledTableCell>}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
