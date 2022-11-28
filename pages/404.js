import REACT, { useEffect } from "react"
import { useRouter } from "next/router";

const NotFound=() => {

   const router = useRouter();
   useEffect(()=>{
    setTimeout(()=>{
        router.push('/contact');
    },3000)
    
   },[])


    return(
        <div>            
                    <h2> 404 Page not Found Page </h2>
        </div>
    )
}

export default NotFound