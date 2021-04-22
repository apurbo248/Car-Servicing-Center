import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Orderlist = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
    
    const [orderlist, setOrderList]= useState([]);
    useEffect(()=>{
        fetch(`https://secure-tor-15170.herokuapp.com/getOrder`)
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

const statusUpdate=(id)=>{
    console.log(id);
}

    return (
        <div className="row container-fluid">
            <Sidebar></Sidebar>
            <div className="col-md-10"style={{marginLeft:210}}>
            <h2>orderlist</h2>
            <section>
                <table class="table">
            <thead>
                <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">UserName</th>
                <th scope="col">Email</th>
                <th scope="col">Order Name</th>
                <th scope="col">Payment Type</th>
                <th scope="col">Status</th>
                </tr>
            </thead>
            {
            orderlist.map(order=>
                        <tbody>
                                <tr> 
                                
                                    <td>{order.Name}</td>
                                    <td>{order.Email}</td>
                                    <td>{order.orderName}</td>
                                    <td>***</td>
                                    <td>
                                        {order?.status}
                                        <button onClick={()=>statusUpdate(order._id)}>ok</button>
                                   
                                    </td>
                                
                                </tr>
                
                                </tbody>
                                ) }
            </table>
            </section>
            </div>
        </div>
    );
};

export default Orderlist;