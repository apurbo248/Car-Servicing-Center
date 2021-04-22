import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {

    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit=data=>{
        console.log(data);
        fetch('https://secure-tor-15170.herokuapp.com/makeAdmin',{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(data)
        })
        .then(success=>{
            if(success){
                alert('Admin added successfully...')
            }
        })
    }
    return (
        <div className="row container-fluid">
            <Sidebar></Sidebar>
            <div className="col-md-10"style={{marginLeft:210}}>
            <h2>Add Admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}  style={{background:'#b2bbf0',padding:'50px',borderRadius:'10px'}}>
           <div style={{background:'#fff',margin:'auto',width:'90%', padding:'80px', borderRadius:'20px'}}>
         
           <input className="form-control  mb-3 " type="email" name="name" placeholder="Email"  {...register("email", {required: true })} />
           {errors.Name && <span className="text-danger mb-3">This field is required</span>}
          </div>
           <div>
           <input className="form-control btn text-white mt-4 ms-5 w-50" type="submit" />
           </div>
       
          
           </form> 
            </div> 
            </div>
    );
};

export default MakeAdmin;