import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import HeaderPart from './Components/Home/HeaderPart/HeaderPart/HeaderPart';
import AddServices from './Components/Dashboard/AddServices/AddServices';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Book from './Components/Dashboard/Book/Book';
import BookingList from './Components/Dashboard/BookingList/BookingList';
import AddReview from './Components/Dashboard/AddReview/AddReview';
import Orderlist from './Components/Dashboard/Orderlist/Orderlist';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import ManageServices from './Components/Dashboard/ManageService/ManageService';
import Login from './Components/Home/Login/Login/Login';
import PrivateRoute from './Components/Home/Login/PrivateRoute/PrivateRoute';


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
  
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
     <Router>
        <Switch>
        <Route exact path="/">
              <HeaderPart/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/Home">
              <HeaderPart/>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard/>
            </PrivateRoute>
            <PrivateRoute path="/bookItem/:_id">
              <Book></Book>
            </PrivateRoute>
            <Route path="/BookingList">
              <BookingList/>
            </Route>
            <Route path="/addreview">
             <AddReview/>
            </Route>
            <Route path="/addServices">
              <AddServices/>
            </Route>
            <Route path="/orderlist">
              <Orderlist/>
            </Route>
            <Route path="/makeAdmin">
              <MakeAdmin/>
            </Route>
            <Route path="/ManageServices">
              <ManageServices/>
            </Route>
         
        </Switch>
      </Router>  
   </UserContext.Provider>

  );
}

export default App;
