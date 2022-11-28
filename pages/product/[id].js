import REACT from "react"
import Header from "/common/header"
import Footer from "/common/footer"
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//     faCartPlus,
//     faHeartCirclePlus
    
//   } from "@fortawesome/free-solid-svg-icons";



//ssr
 export async function getServerSideProps(context){

     const {id}=context.query;

     const response= await fetch('https://fakestoreapi.com/products' + id);

     const data = await response.json(); // converts stringified json to parsed json

     return{
         props: {productdata : data}
  }
 }



const ProductId=({productdata}) => {
   // const {productdata}=props;
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Product Detail Page -SSR Method</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <div><img src={productData.image} width="100%" /></div>
                </div>
                <div className="col-6">
                    <h3>Products : {productData.title}</h3>
                    <p><strong>Category:</strong> {productData.category}</p>
                    <p><strong>Descriptions:</strong> {productData.description}</p>
                    <h5>Rating : {productData.rating.rate}, Count : {productData.rating.count}</h5>
                    <p><strong>Price:</strong> ${productData.price}</p>
                    <div><Link className="btn btn-large btn-secondary m-1" href="#"><FontAwesomeIcon icon={faCartPlus} /> Add To Cart</Link>
                    <Link className="btn btn-large btn-outline-secondary m-1" href="#"><FontAwesomeIcon icon={faHeartCirclePlus} /> Wishlist</Link></div>
                   
                </div>

            </div>
        </div>
    )
}

export default ProductId