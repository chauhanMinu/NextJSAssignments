import REACT from "react"
import styles from '../styles/Home.module.css'
import Link from 'next/link'
const Navbar=() => {

    return(
        <div className={styles.topnav}>            
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/courses">Courses</Link>
                    <Link href="/batches">Batches</Link>
                    <Link href="/facility">Facilities</Link>
                    <Link href="/contact">Contact Us</Link>
        </div>
    )
}

export default Navbar