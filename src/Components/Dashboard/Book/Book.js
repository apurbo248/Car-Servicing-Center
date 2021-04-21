import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';
import { Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCard from '../SimpleCard/SimpleCard';
import { UserContext } from '../../../App';
import { useForm } from 'react-hook-form';

const stripePromise = loadStripe('pk_test_51IeKjbKEpvv2MRIRgOxUc9fD5S2266VpauzM59KB0wlzgqcncDMwEQQ0WilW0g8dY8q9lY72krWAyHcXm7QJM2I500wDS3WABE');
const Book = () => {
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const {_id} = useParams();
    const[chooseProduct, setChooseProduct] =useState([]);
   
    
    useEffect(()=>{
    fetch(`http://localhost:2000/getSingleItem/${_id}`)
        .then(res=>res.json())
        .then(data=>{
        
            setChooseProduct(data[0]);  
        })
        .catch(err=>
            {
                console.log(err);
            })
    },[_id])
    



    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:2000/order',{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(data,loggedInUser.email)
        },[])
        .then(success=>{
            if(success){
                alert('Data added successfully...')
            }
        })
    }


    
    return (
        <div className="row container-fluid">
            <Sidebar></Sidebar>
            <div className="col-md-10">
                <h3>Book Service</h3>
         <form onSubmit={handleSubmit(onSubmit)} className="pt-5" >
          
          <div style={{background:'#fff',margin:'',width:'90%', padding:'', borderRadius:'20px'}}>
         
           <input className="form-control p-4 mb-3 " type="text" name="name" placeholder="Your name" value={loggedInUser.name}  {...register("Name", {required: true })} />
           {errors.serviceTitle && <span className="text-danger mb-3">This field is required</span>}
           <input className="form-control p-4 mb-3 " type="text" name="Email" placeholder="Your email" value={loggedInUser.email} {...register("Email", {required: true })} />
           {errors.serviceTitle && <span className="text-danger mb-3">This field is required</span>}
           <input className="form-control p-4 mb-3 "  type="text" name="company"  placeholder="oder" value={chooseProduct.name} {...register("orderName", {required: true} )}  />
        
           <input className="form-control p-5 " type="textarea" name="description" placeholder="description" value={chooseProduct.description}  {...register("description", {required: true })} />
          
           
           <div>
           <input className="form-control btn text-white mt-2  w-50" type="submit" />
           </div>
          </div>
          <Elements stripe={stripePromise}>
            <SimpleCard></SimpleCard>
            </Elements>
          
       </form> 
                
            </div>
        </div>
    );
};

export default Book;