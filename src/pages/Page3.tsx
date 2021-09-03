import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Search from '../components/Search';


function Page3(){


    return(
        <React.Fragment>
            <Header />
            <h1 role='mark'>This is page3</h1>
            <Search type='forecast'/>
            <img src="/logo512.png" alt="log"/>
            <Footer />
        </React.Fragment>
    )

}


export default Page3;