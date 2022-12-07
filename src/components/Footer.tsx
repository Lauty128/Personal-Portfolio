//-------------- Imports
import { FaFacebook, FaLinkedin, 
         FaGithub } from "react-icons/fa"

//-------------- Styles
import styles from "../styles/Footer.module.css"

export default function Footer(){

    return(
        <footer className={styles.container}>
            <h4 className={styles.h4}>LAUTARO SILVERII</h4>

            <div className={styles.networks}>
                <a href="https://github.com/Lauty128" className={styles.network}>
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/lautaro-silverii-8a5750209/" className={styles.network}>
                    <FaLinkedin />
                </a>
            </div>

            <p className={styles.p}>©Copyright | 💻 With ReactJS</p> 
        </footer>
    )
}




