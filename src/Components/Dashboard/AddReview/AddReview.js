import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

  const Review = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    
    const onSubmit = data => {
      console.log(data)
      fetch('https://secure-tor-15170.herokuapp.com/addReview',{
          method: 'POST',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify(data)
      })
      .then(success=>{
          if(success){
              alert('Data added successfully...')
          }
      })
  }

    return (
      <section className="row container-fluid">
       <Sidebar></Sidebar>
       <div className="col-md-10">
       <h2>
               Add Service
            </h2>
            <div style={{background:'#daeff5e6', width:'100%' , height:'564px'}}>
                
             <form onSubmit={handleSubmit(onSubmit)} className="pt-5" >
          
               <div style={{background:'#fff',margin:'auto',width:'90%', padding:'80px', borderRadius:'20px'}}>
              
                <input className="form-control p-4 mb-3 " type="text" name="name" placeholder="Your name"  {...register("Name", {required: true })} />
                {errors.Name && <span className="text-danger mb-3">This field is required</span>}
                <input className="form-control p-4 mb-3 "  type="text" name="company"  placeholder="Company's name,Designation"  {...register("company", {required: true} )}  />
                {errors.company && <span className="text-danger mb-3">This field is required</span>}
                <input className="form-control p-5 " type="textarea" name="description" placeholder="Enter Designation"  {...register("description", {required: true })} />
                {errors.description && <span className="text-danger ">This field is required</span>}
                
                <div>
                <input className="form-control btn text-white mt-2  w-50" type="submit" />
                </div>
               </div>
               
            </form> 
           </div>
       </div>
        </section>
    );
  }


export default Review;