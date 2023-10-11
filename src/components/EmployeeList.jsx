import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tab,
  tableCellClasses,
  styled,
} from "@mui/material";
import ActionButtons from "./ActionButtons";
import AddNew from "./AddNew";
import { useState } from "react";
import { data } from "../data";

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

const EmployeeList = () => {
  const [employees, setEmployees] = useState(data);
  const handleAddNew = (record) => {
    setEmployees([...employees, record]);
    console.log(data);
  };
  const handleDelete = (id) => {
    const newList = employees.filter((employee) => id !== employee.id);
    setEmployees(newList);
  };

  const handleEdit = (data) => {
    setEmployees(data);
  };

  return (
    <>
      <AddNew handleAddNew={handleAddNew} />
      <TableContainer component={Paper} sx={{ maxHeight: 400, minHeight: 400 }}>
        <Table sx={{ minWidth: 600 }} stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center"> Department</StyledTableCell>
              <StyledTableCell align="center"> Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => {
              return (
                <StyledTableRow key={employee.id}>
                  <StyledTableCell align="center">
                    {employee.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {employee.department}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <ActionButtons
                      handleDelete={handleDelete}
                      id={employee.id}
                      handleEdit={handleEdit}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default EmployeeList;
