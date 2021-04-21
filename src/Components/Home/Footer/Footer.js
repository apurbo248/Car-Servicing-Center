import React from 'react';

const Footer = () => {
    return (
       <div className="d-flex justify-content-center" style={{background:'#00ffff'}}>
            <div className="row container-fluid mt-5 mb-5 w-75 ">
           
           <div className="col-md-6 mb-3">
           
           <h6>Dhaka,Bangladesh</h6>
           <h6>+693434554</h6>
           <h6>Support@gmail.com</h6>
           </div>
           
           <div className="col-md-6 mb-3">
           <input className="form-control btn-outline-success mb-3" type="email" placeholder="Subscribe for update"/>
           <button className="btn text-white ">Subscribe</button>
           </div>
       <hr className="w-50 m-auto mt-5"/>

       <div className="d-flex justify-content-center mt=5 mb-5">
           <div>
               &copy; Copyright apurbo 2021 || 
           </div>
           <div><a href="#">facebook</a></div>
           <div className="ml-1"><a href="#">Youtube</a></div>
           <div className="ml-1"><a href="#">Twitter</a></div>
       </div>

   </div>
       </div>
    );
};

export default Footer;