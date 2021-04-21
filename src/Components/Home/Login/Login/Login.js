import React, { useState } from 'react';
import { useContext } from 'react';

import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../../App';
import { initiateLoginFramework, googleSIgnInHandler,  facebookSignInHandler } from '../Login/LoginManager';

function Login() {
 
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  initiateLoginFramework();

  const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    googleSIgnInHandler()
      .then(res => {
        handleResponse(res, true);
      })
  }

  const fbSignIn = () => {
    facebookSignInHandler()
      .then(res => {
        handleResponse(res, true);
      })

  }


  const handleResponse = (res, redirect) =>{
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
  }

  return (
    
    <div className="d-flex justify-content-center align-items-center"style={{height:'100vh'}} >
      <div className="row d-flex "style={{marginTop:'30px',background:'#097e13',padding:'150px',borderRadius:'20px'}}>
        <div className="col-12 ">
        <div className="mb-3">
          
         <button className="btn btn-success w-100" onClick={googleSignIn} variant="info w-50">
        Continue with google
        </button>
        </div>
   
   <div>
   <button className=" btn btn-primary " onClick={fbSignIn} variant="primary w-50">
       Continue with facebook
       </button>
   </div>
     
        </div>
      </div>
    </div>
    // <div className="form-container rounded m-auto">    
    // <div className="app-authentication ">
    //   <div className=" mb-3">
    //     <button className="app-btn d-flex align-items-center justify-content-between" onClick={googleSignIn} variant="info w-50">
    //     Continue with google
    //     </button>
    //   </div>
    //   <div className="">
    //     <button className="app-btn d-flex align-items-center justify-content-between" onClick={fbSignIn} variant="primary w-50">
    //    Continue with facebook
    //     </button>
    //   </div>
    //  </div>
    // </div>
  );
}

export default Login;
