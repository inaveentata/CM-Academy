"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { notifications } from "@/data/notifications";
import Link from "next/link";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const rows = [...notifications];

function RenderTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Issue Date</StyledTableCell>
            <StyledTableCell align="center">Organisation</StyledTableCell>
            <StyledTableCell align="center">Post Name</StyledTableCell>
            <StyledTableCell align="center">Appointment Method</StyledTableCell>
            <StyledTableCell align="center">Last Date</StyledTableCell>
            <StyledTableCell align="center">Apply Link</StyledTableCell>
            <StyledTableCell align="center">View Notification</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.issueDate}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.organisation}
              </StyledTableCell>
              <StyledTableCell align="center">{row.postName}</StyledTableCell>
              <StyledTableCell align="center">
                {row.appointmentMethod}
              </StyledTableCell>
              <StyledTableCell align="center">{row.lastDate}</StyledTableCell>
              <StyledTableCell align="center">
                <Link
                  href={row.applyLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Apply
                </Link>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Link
                  href={row?.notificationLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View
                </Link>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default RenderTable;
