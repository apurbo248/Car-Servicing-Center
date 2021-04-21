import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';

import './Header.css'
const Header = () => {
  const [loggedInUser, setLoggedInUser ] = useContext(UserContext);


    return (
        <nav class="navbar navbar-expand-lg  navbar-dark shadow">
        <div class="container-fluid">
        
        <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon "></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link text-white" aria-current="page" href="/home">Home</a>
            </li>
            <li class="nav-item ">
            <a class="nav-link text-white" href="/dashboard">Dashboard</a>
            </li>  
            <li class="nav-item">
            <a class="nav-link text-white" href="#">Services</a>
            </li>
            <li class="nav-item ">
            <a class="nav-link text-white" href="#">Admin</a>
            </li>     
        </ul>
        <form class="d-flex">
        {
                loggedInUser.isSignedIn ? 
                <strong style={{color:'orange',fontSize:'15px'}}>{loggedInUser.name} </strong>
                
              : <Link className="btn btn-success " to="/login"> Log in</Link>
            }
      </form>
    </div>
 </div>
 </nav>
);
};

export default Header;