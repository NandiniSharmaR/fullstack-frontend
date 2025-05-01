import PrivateRoute from "./auth/Privateroute";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from './users/ViewUser';
import Login from './pages/Login';
//console.log("EditUser:",EditUser);

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          
          <Route 
            exact 
            path="/home" 
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            } 
          />
          <Route 
            exact 
            path="/adduser" 
            element={
              <PrivateRoute>
                <AddUser />
              </PrivateRoute>
            } 
          />
          <Route 
            exact 
            path="/edituser/:id" 
            element={
              <PrivateRoute>
                <EditUser />
              </PrivateRoute>
            } 
          />
          <Route 
            exact 
            path="/viewuser/:id" 
            element={
              <PrivateRoute>
                <ViewUser />
              </PrivateRoute>
            } 
          />
        </Routes>
      </Router>
    </div>
  );
} export default App;