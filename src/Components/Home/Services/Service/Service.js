import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = () => {
    const [service, setService] = useState([])
    
    useEffect(()=>{
        fetch('https://secure-tor-15170.herokuapp.com/services')
        .then(res => res.json())
        .then(data=>{
           
            setService(data)
        })
        
    },[])
    return (
        <div>
            <h2 className="text-center pb-5 pt-5">Services</h2>

            <div className="d-flex justify-content-center">
          <div className="row w-75">
              
                  {
                      service.map(services=>
                        
                        <div className="col-md-4 pb-4">
                         <div class="card" style={{width: '20rem'}}>
                        <img src={services.image} class="card-img-top" alt="..."/>
                        <div class="card-body text-center">
                        <h5 class="card-text">{services.name}</h5>
                        <p>{services.description}</p>
                       <Link to={`/bookItem/${services._id}`}> <button class="btn btn-success"  >Book Service</button></Link>
                        </div>
                       
                     </div>
                    </div>
                     )
                  }
                  </div>
              </div>
       
        </div>
    );
};

export default Service;