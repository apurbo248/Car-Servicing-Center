import React from 'react';
import'./Headermain.css'
import Spin from 'react-reveal/Spin';
import Bounce from 'react-reveal/Bounce';
const HeaderMain = () => {
    return (
        <main className="headermain d-flex align-items-center justify-content-center container-fluid">               
                <div className="row  ">
                <div className="col-sm-12 ">
                       <Spin>
                       <h1 className="text-white text-center" >Car Servicing Center</h1>
                       </Spin>
                       <Bounce left>
                       <p className="text-white pt-3">
                           We Will Take Care of your car In Garage,And The Car Will Take Care Of You On The Road.
                       </p>
                       </Bounce>
                    </div>
                    </div>   
        </main>
    );
};

export default HeaderMain;