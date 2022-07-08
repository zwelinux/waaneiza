import React from 'react';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const Wec = () => {
    return(
        <Grid item xs={8} sx={{ marginLeft: 10 }} align='center'>
            <br /><br />
            <Typography variant='h4'><b>(WEC)</b></Typography>
            <Typography variant='h6'><b><code>System Development Team</code></b></Typography>
            <br /><br /><br />
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>
                    <TableCell align="left"><b>Filename</b></TableCell>
                    <TableCell align="left"><b>Preview</b></TableCell>
                    <TableCell align="left"><b>Uploaded By</b></TableCell>
                    <TableCell align="left"><b>Updated At</b></TableCell>
                    <TableCell align="left"><b>Created At</b></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>

                    <TableRow
                    key="1"
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell align='left' component="th" scope="row">
                        Filename
                    </TableCell>
                    <TableCell align="left">Preview</TableCell>
                    <TableCell align="left">System Developer</TableCell>
                    <TableCell align="left">Updated At</TableCell>
                    <TableCell align="left">Created At</TableCell>
                    </TableRow>

                </TableBody>
            </Table>
            </TableContainer>
        </Grid>
    );
}

export default Wec;