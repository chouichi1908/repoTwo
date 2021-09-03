import React  from "react";
// import {withRouter} from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'



function Home(props:any){

    console.log('1画面目')

    return(
        
        <React.Fragment>
            <Header/>
            <h1>Home</h1>
            <h2>This is a weather app for learning.</h2>
            <img src="/logo512.png" alt="log"/>
            <Footer />
        </React.Fragment>
       
        
    )
}



export default Home