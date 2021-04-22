import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import Sidebar from '../Sidebar/Sidebar';
const AddServices = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const [imageUrl, setImageUrl]  = useState(null);
  
    const onSubmit = data => {
        console.log(data)
        const eventData ={
            name: data.serviceTitle,
            description: data.description,
            image:imageUrl
        };
       
        fetch('https://secure-tor-15170.herokuapp.com/addServices',{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(eventData)
        })
        .then(success=>{
            if(success){
                alert('Data added successfully...')
            }
        })
    }

    const handleImageUpload=event =>{
       console.log(event.target.files)
        const  imageData = new FormData();
        imageData.set('key', 'c9e7c4b6f1a9856f03990d5024785ae5');
        imageData.append('image',event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', 
           imageData
          )
          .then(function (response) {
             setImageUrl(response.data.data.display_url)          
             console.log(response)   
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
       <div className="row container-fluid">
           <Sidebar></Sidebar>
           <div className="col-md-10"style={{marginLeft:220}}>
        
            <h2>
               Add Service
            </h2>
            <div style={{background:'#daeff5e6', width:'100%' , height:'564px'}}>
                
             <form onSubmit={handleSubmit(onSubmit)} className="pt-5" >
          
               <div style={{background:'#fff',margin:'auto',width:'90%', padding:'50px', borderRadius:'20px'}}>
               
                <input className="form-control p-4 mb-3 " type="text" name="serviceTitle" placeholder="Enter title"  {...register("serviceTitle", {required: true })} />
                {errors.serviceTitle && <span className="text-danger">This field is required</span>}
                <input className="form-control p-4 mb-3"  type="file" name="img"   {...register("img", {required: true} )} onChange={handleImageUpload} />
                {errors.img && <span className="text-danger">This field is required</span>} 
               
                <input className="form-control p-5 " type="textarea" name="description" placeholder="Enter Designation"  {...register("description", {required: true })} />
                {errors.description && <span className="text-danger mb-3">This field is required</span>}
                
               <div>
               <input className="form-control btn text-white mt-3 w-50" type="submit" />
               </div>
               </div>              
            </form>           
            </div>
           </div>
       </div>
    );
};

export default AddServices;