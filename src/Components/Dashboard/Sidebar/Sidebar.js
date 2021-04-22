import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-regular-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
     const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://secure-tor-15170.herokuapp.com/getAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="sidebar  justify-content-between col-md-2 py-5 px-4 " style={{ height: "100vh" }}>
            <ul className="list-unstyled">

            <li>
                    <Link to="/" className="text-white">
                       <span>Home</span>
                    </Link>
                </li>
           {!isAdmin && <div>
            
                <li>
                        <Link to="/addreview" className="text-white" >
                            <span>Add Review</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bookItem" className="text-white">
                             <span>Book Item</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/BookingList" className="text-white">
                             <span>Booking list</span>
                        </Link>
                    </li>
                    
               </div>
               }
                   
               {isAdmin && <div> 
                <li>
                        <Link to="/addServices" className="text-white" >
                             <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/orderlist" className="text-white" >
                             <span>Order list</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/makeAdmin" className="text-white" >
                             <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/ManageServices" className="text-white" >
                             <span>Manage Services</span>
                        </Link>
                    </li>
            </div>
                }
         </ul>
                <Link to="/" className="text-white"> <span>Logout</span></Link>
            
        </div>
    );
};

export default Sidebar;