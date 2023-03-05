import { Box } from '@mui/system';
import EmployeeService from '../Services/EmployeeService';
import Sidebar from './Sidebar';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
class ListEmployees extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            employees:[]
        }
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((response) => {
            this.setState({ employees: response.data})
        });
    }   
    

    render (){

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
            // hide last border
            '&:last-child td, &:last-child th': {
              border: 0,
            },
          }));
          
          function createData(EmployeeId, FirstName, LastName, Age, CTC,Organisation) {
            return { EmployeeId, FirstName, LastName, Age, CTC,Organisation };
          }
          
          const rows = [
            createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Cupcake', 305, 3.7, 67, 4.3),
            createData('Gingerbread', 356, 16.0, 49, 3.9),
          ];



        return (
            
            <Box sx={{ display: 'flex' }}>
            
               <Sidebar/> 



               <Box component="main" sx={{flexGrow:1,p:20}}>

                <h1 className = "text-center"> Employee Detail</h1>
               {/*  <table className = "table table-striped">
                    <thead>
                        <tr>
        <td> Employee Id</td>
                            <td> Employee First Name</td>
                            <td> Employee Last Name</td>
                            <td> Employee Age</td>
                            <td> Employee CTC</td>
                            <td> Employee Organisation</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(
                                employee => 
                                <tr key = {employee.id}>
                                     <td> {employee.firstName}</td>   
                                     <td> {employee.lastName}</td>   
                                     <td> {employee.age}</td>   
                                     <td> {employee.ctc}</td>   
                                     <td> {employee.organisation}</td> 
                                </tr>
                            )
                        }
                    </tbody>
                    </table> */}
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>EmployeeId</StyledTableCell>
            <StyledTableCell align="right">FirstName</StyledTableCell>
            <StyledTableCell align="right">Last Name</StyledTableCell>
            <StyledTableCell align="right">Age</StyledTableCell>
            <StyledTableCell align="right">CTC</StyledTableCell>
            <StyledTableCell align="right">Organisation</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { 
          this.state.employees.map(
                                employee => 
            <StyledTableRow >
             <StyledTableCell align="left">{employee.id}</StyledTableCell>
              <StyledTableCell align="right">{employee.firstName}</StyledTableCell>
              <StyledTableCell align="right">{employee.lastName}</StyledTableCell>
              <StyledTableCell align="right">{employee.age}</StyledTableCell>
              <StyledTableCell align="right">{employee.ctc}</StyledTableCell>
              <StyledTableCell align="right">{employee.organisation}</StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  



                </Box>
              
              
           
            </Box> 
            
        )
    }
}

export default ListEmployees

