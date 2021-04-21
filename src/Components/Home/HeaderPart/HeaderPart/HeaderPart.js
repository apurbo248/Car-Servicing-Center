import React from 'react';
import './HeaderPart.css'
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import HeadermainBottom from '../HeadermainBottom/HeadermainBottom';

import Service from '../../Services/Service/Service';
import Reviews from '../../Reviews/Reviews';
import Footer from '../../Footer/Footer';

const HeaderPart = () => {
    return (
        <section className="headerPart-section ">
        <div className="overley ">
            <Header></Header>
            <HeaderMain></HeaderMain>
            <HeadermainBottom></HeadermainBottom>
            <Service></Service>
           <Reviews></Reviews>
           <Footer></Footer>
        </div>
        </section>
    );
};

export default HeaderPart;