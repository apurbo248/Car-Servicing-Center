import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const BookingList = () => {
     
        const [orderlist, setOrderList]= useState([]);
        useEffect(()=>{
            fetch(`http://localhost:2000/getOrder`)
            .then(res=>res.json())
            .then(data=>{
            console.log(data)
                setOrderList(data);  
            })
            .catch(err=>
                {
                    console.log(err);
                })
        },[])
    
   
    
        return (
            <div className="row container-fluid">
                <Sidebar></Sidebar>
                <div className="col-md-10">
                <h2>orderlist</h2>
               <div className="row">
                    {
                        orderlist.map(order=>
                            <div class="card col-md-5 m-4">
                        <div class="card-header bd-warning">
                   {order.status}
                </div>
                <div class="card-body">
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