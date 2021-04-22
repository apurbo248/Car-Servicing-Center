import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [review, setReview] = useState([])

    useEffect(()=>{
        fetch('https://secure-tor-15170.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data=>setReview(data))
        
    },[])

    return (
        <div>
        <h2 className="text-center pb-5 pt-5">Reviews</h2>

        <div className="d-flex justify-content-center">
      <div className="row w-75">
          
              {
                  review.map(reviews=>
                    <div className="col-md-4 pb-4">
                     <div class="card" style={{width: '20rem'}}>
                    <div class="card-body text-center">
                
                  
                   <h5 class="card-text">{reviews.Name }</h5>
                   <h6>{ reviews.company}</h6>
                   
                    <p>{reviews.description}</p>
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

export default Reviews;