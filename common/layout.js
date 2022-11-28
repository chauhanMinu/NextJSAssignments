import React from "react"
import Header from './header'
import Footer from "./footer"
import Navbar from "./navbar"
const Layout=() => {

    return(
        <div className="container">            
            <Header/>
            <Navbar/>          
           <h2> Layout </h2>
            <Footer/>
        </div>
    )
}

export default Layout