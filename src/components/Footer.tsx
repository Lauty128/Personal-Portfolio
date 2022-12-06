//-------------- Imports
import { FaFacebook, FaLinkedin, 
         FaGithub } from "react-icons/fa"

//-------------- Styles
import styles from "../styles/Footer.module.css"

export default function Footer(){

    return(
        <footer className={styles.container}>
            <h4 className={styles.h4}>©LAUTARO SILVERII</h4>
            <div className={styles.networks}>
                <span className={styles.span}>Redes sociales</span>
                <a href="https://github.com/Lauty128" className={styles.network}>
                    <FaGithub /> Github
                </a>
                <a href="https://www.facebook.com/lautaro.silverii.5" className={styles.network}>
                    <FaFacebook /> Facebook
                </a>
                <a href="https://www.linkedin.com/in/lautaro-silverii-8a5750209/" className={styles.network}>
                    <FaLinkedin /> Linkedin
                </a>
            </div>
        </footer>
    )
}




