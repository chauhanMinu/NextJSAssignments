import REACT from "react"
import Header from "/common/header"
import Footer from "/common/footer"
import Navbar from "/common/navbar"
//import styles from "./styles/global.css"

export const getStaticPaths = async()=>{
 
    //const arr= ['2022','2021' , '2020' , '2019' ];
    const response = await fetch('https://fakestoreapi.com/products');
    const arr= await response.json();
    const paths = arr.map((item)=>{
        return {
            params: {year:item.id.toString()}
        }
    })
    return {
        paths,
        fallback: false
    }

}

export const getStaticProps = async (context)=>{
    const tmp = context.params.year;
    const response = await fetch('https://fakestoreapi.com/products/'+tmp);
    const data = await response.json();
    return{
        props:{
            res:data,
            layout:false
        }
    }
}

const Year=({res}) => {

    return(
        <div>        
            <Header/>
            <Navbar/>    
                    <h2> Year Page call - {res.title} </h2>
                    <div>{res.price}</div>
                    <div>{res.category}</div>
                    <div><img src={res.price}/></div>
                    <Footer/>
        </div>
    )
}

export default Year