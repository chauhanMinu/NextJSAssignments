import REACT from "react"
import Header from "../common/header"
import Footer from "../common/footer"
import Navbar from "../common/navbar"
import styles from '../styles/about.module.css'
import Image from 'next/image'

const About=() => {

    return(
<>
        
        <div>
            <Header/>
            <Navbar/>
                <h2 className={styles.about_text}> Welcome to About Page</h2>
                <Image src='/Rlogical-Blog-Images-thumbnail.png' width={400} height={300}/>
                <Footer/>
        </div>
       </>
    )
}

export default About