import REACT from "react"
import Header from "../common/header"
import Footer from "../common/footer"
import Navbar from "../common/navbar"
import Image from 'next/image'
import Styles from '../styles/Courses.module.css'

export const getStaticProps=async() => {
  //api call
  // ssg - on build
    const response= await fetch('https://fakestoreapi.com/products?sort=desc');
    const data = await response.json(); // converts stringified json to parsed json

    return{
        props: {productdata : data}
    }
}


const Courses=(props) =>{
    console.log('props', props)
    const {productdata}=props;
    return(
        <div>
             <Header/>
             <Navbar/>
            <h2> Courses Page</h2>
            
            {productdata.map(item=>(
                  <div className="col-3 mb-3">
                  <div className="card">
                <div className="card-body">
                 <img src={item.image} alt=".." className={Styles.img_responsive} />
                 <h4 className='fs-6'>{item.title}</h4>    
                
                 <h4>Rs. {item.price}</h4>
                 <a className={Styles.btncolor} href="/contact.js">Add to Cart</a>                 
                 </div>
                 </div>
                 </div>
               
            ))
            }
           
             <Footer/>
        </div>
    )
}

export default Courses;