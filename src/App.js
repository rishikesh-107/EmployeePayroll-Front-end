import  Stack  from '@mui/material/Stack';
import ListEmployees from './components/ListEmployees';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import Home from './components/Home';
import { Routes,Route,BrowserRouter } from 'react-router-dom';




function App() {
  return (
    

    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element ={<Home></Home>}></Route>
      <Route path="/ListEmployees" element={<ListEmployees />}></Route>
    </Routes>
   
      </BrowserRouter>
   

   </>
   ); 
}

export default App;
