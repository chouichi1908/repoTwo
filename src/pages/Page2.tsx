import Header from '../components/Header'
import Footer from '../components/Footer';
import Search from '../components/Search';
import React from 'react';


function Page2(){


    return(
        <React.Fragment>
            <Header />
            <h1 role='contentinfo'>This is page2</h1>
            <Search type='weather' />
            <img src="/logo512.png" alt="log"/>
            <Footer />
        </React.Fragment>
        
    )

}


export default Page2;
