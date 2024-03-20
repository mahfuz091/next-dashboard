"use client";
import { Box } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(sl, name, email, role, status) {
  return { sl, name, email, role, status };
}

const rows = [
  createData(1, "John Deo", "j@email.com", "Admin", "Active"),
  createData(1, "John Deo", "j@email.com", "Admin", "Active"),
  createData(1, "John Deo", "j@email.com", "Admin", "Active"),
  createData(1, "John Deo", "j@email.com", "Admin", "Active"),
  createData(1, "John Deo", "j@email.com", "Admin", "Active"),
];

const UsersPage = () => {
  return (
    <Box sx={{ paddingTop: "30px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Sl. No.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.sl}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {row.sl}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UsersPage;
