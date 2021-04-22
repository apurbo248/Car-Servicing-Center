import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import AddServices from '../AddServices/AddServices';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
    return (
          
              
              <div className="row container-fluid ">
                                 
                <Sidebar/>
                    <div className="col-md-10 text-center text-white bg-warning"style={{marginLeft:220}}>
                    <h3 className="pt-5 mt-5">Wellcome  <h1 className="text-success">{loggedInUser.name}</h1> </h3>
                    </div>
                </div>
                
            
        
    );
};

export default Dashboard;