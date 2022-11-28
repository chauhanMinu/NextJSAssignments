import REACT from "react"
import Header from "/common/header"
import Footer from "/common/footer"
import Navbar from "/common/navbar"

const Library=() => {

    return(
        <div>
            <Header/>      
             <Navbar/> 
                <h2> Welcome to library Page</h2>
                <Footer/>
        </div>
    )
}

export default Library