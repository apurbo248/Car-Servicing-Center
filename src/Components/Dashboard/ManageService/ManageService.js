import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ManageService = () => {
    const [service, setService] = useState([]);
    const [delet, setDelet] = useState([]);
    useEffect(()=>{
        fetch('https://secure-tor-15170.herokuapp.com/services')
        .then(res => res.json())
        .then(data=>{
           
            setService(data)
        })
        
    },[])

    const deleteProduct=(id)=>{
        fetch(`https://secure-tor-15170.herokuapp.com/services/${id}`,{
          method: 'DELETE'
        })
        .then(res=> res.text())
        .then(data=>{
          if(data){
            const remainItem = delet.filter(item=> item._id !==id);
            setDelet(remainItem);
            alert("Services deleted successfully")
            console.log(delet)
          }
        })
    }

    return (
        <div className="row container-fluid">
            <Sidebar></Sidebar>

            <div className="col-md-10"style={{marginLeft:210}}>
            <h2>Manage Services</h2>
            
            <section>
                <table class="table">
            <thead>
                <tr>
                <th scope="col">Service Name</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
                
                </tr>
            </thead>
            {
            service.map(service=>
                        <tbody>
                                <tr> 
                                
                                    <td>{service.name}</td>
                                    <td>{service.description}</td>
                                    <td> <button onClick={()=> deleteProduct(service._id)}><FontAwesomeIcon icon={faTrashAlt} style={{color: 'red'}} /></button> </td>
                                
                                </tr>
                
                                </tbody>
                                ) }
            </table>
            </section> 

            </div>
            
        </div>
    );
};

export default ManageService;