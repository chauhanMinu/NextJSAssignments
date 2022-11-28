import REACT from "react"
import Header from "../common/header"
import Footer from "../common/footer"
import Navbar from "../common/navbar"


// ssr - page visit
export const getStaticPaths = async () =>{
   
    const response= await fetch('https://fakestoreapi.com/products?sort=desc');

    const data = await response.json(); // converts stringified json to parsed json

    return{
        props: {productdata : data}
    }
}

const products=(props) => {
    const {productdata}=props;
    return(
        <div>
            <Header/>
                  <h2> Welcome to Product Page</h2>
                  {productdata.map(item=>(
                  <div>{item.title}</div>
                    ))}
            <Footer/>        
        </div>
    )
}

export default products