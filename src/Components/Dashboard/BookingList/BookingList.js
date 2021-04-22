import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
        const [orderlist, setOrderList]= useState([]);
        useEffect(()=>{
            fetch(`https://secure-tor-15170.herokuapp.com/getOrderByEmail?email=${loggedInUser.email}`)
            .then(res=>res.json())
            .then(data=>{
            console.log(data)
                setOrderList(data);  
            })
            .catch(err=>
                {
                    console.log(err);
                })
        },[loggedInUser.email])
    
  
        return (
            <div className="row container-fluid">
                <Sidebar></Sidebar>
                <div className="col-md-10">
                <h2>Booking list</h2>
               <div className="row">
                    {
                        orderlist.map(order=>
                            <div class="card col-md-5 m-4 bg-primary">
                        <div class="card-header bg-warning text-right  text-center"style={{marginLeft:'320px'}}>
                   {order.status}
                </div>
                <div class="card-body text-white">
                    <h5 class="card-title">{order.orderName}</h5>
                    <p class="card-text">{order.description}</p>
                    
                </div>
                </div>
                            )
                    }
                </div>
                </div>
                </div>
            
        );
};

export default BookingList;