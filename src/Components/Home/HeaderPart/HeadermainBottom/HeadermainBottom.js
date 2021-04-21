import React from 'react';
import './HeadermainBottom.css'
import guranty from '../../../images/gurantee.jpg';
import rating from '../../../images/rating.jpg';
import saving from '../../../images/savings.jpg';
const HeadermainBottom = () => {
    return (
       
           <section className="hb pt-0 ">
                <div className="d-flex justify-content-center  ">
                <div className="row w-75 bottom ">
                    <div className="col-md-4 pb-4  ">
                         <div class="card shadow" style={{width: '16rem'}}>
                        <img className=" " src={guranty} class="card-img-top" alt="..."/>
                        <div class="card-body text-center ">
                        <h5 class="card-text"style={{color:"rebeccapurple"}}>Price Gurantee</h5>
                        <h6 style={{color:"rebeccapurple"}}>Our price match promise</h6>
                        </div>
                        </div>
                     </div> 
                     <div className="col-md-4 pb-4 ">
                         <div class="card shadow " style={{width: '16rem'}}>
                        <img className=" " src={rating} class="card-img-top" alt="..."/>
                        <div class="card-body text-center ">
                        <h5 class="card-text" style={{color:"rebeccapurple"}}> Price Gurantee</h5>
                        <h6 style={{color:"rebeccapurple"}}>Our price match promise</h6>
                        </div>
                        </div>
                     </div> 
                     <div className="col-md-4 pb-4 ">
                         <div class="card shadow" style={{width: '16rem'}}>
                        <img className=" " src={saving} class="card-img-top" alt="..."/>
                        <div class="card-body text-center">
                        <h5 class="card-text"style={{color:"rebeccapurple"}}>Price Gurantee</h5>
                        <h6 style={{color:"rebeccapurple"}}>Our price match promise</h6>
                        </div>
                        </div>
                     </div> 
                    
                </div>
            </div>
           </section>
    );
};

export default HeadermainBottom;