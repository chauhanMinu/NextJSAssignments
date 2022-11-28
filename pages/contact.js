import REACT from "react"
import { createModuleResolutionCache } from "typescript";

export const getStaticProps = async (context)=>{
    console.log("data" -context);
    const tmp = context.title;
    const response = await fetch('https://fakestoreapi.com/products/'+tmp);
    const data = await response.json();
    return{
        props:{
            res:data,
            layout:false
        }
    }
}



const Contact=({res}) => {

    console.log("item -" -res)
    return(
        <div>
            <h2>Batch Page - {res.title}</h2>
        <div>{res.price}</div>
        <div>{res.category}</div>
        <div><img src={res.image}/></div>
                  <h2> Welcome to Contact Page</h2>
        </div>
    )
}

export default Contact