//-------------- Styles
import styles from "../styles/Header.module.css"

//-------------- Images and Icons
import logo from '../assets/logo-mini.png'
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa"


export default function Header(){

    //-------------------- Menu Button
    const toggleButton = (e:any)=>{
        if(window.innerWidth > 700) return;

        let target = e.target
        if(target.parentNode.classList.contains(`${styles.Menu__h3}`)){
            // If <e.target == "h3"> then the value of the "target" constant is changed.To reuse the function
            target = target.parentElement
                    .parentElement.previousElementSibling;
        }

        target.classList.toggle(`${styles["Button--active"]}`)
        target.nextElementSibling.classList.toggle(`${styles["links--active"]}`)
    }

    //-------------------- Return
    return (
        <header id="Home">
            
            <nav className={styles.Menu} id="Menu">
                <img src={logo} alt="logo portafolio" className={styles.img} />

                <div className={`${styles.Button}`} onClick={toggleButton}>
                    <span className={styles.buttonDiv1}></span>
                    <span className={styles.buttonDiv2}></span>
                    <span className={styles.buttonDiv3}></span>
                </div>

                <div className={styles.links}>
                    <h3 className={`${styles.Menu__h3} ${styles.Menu__main}`}>
                        <a onClick={toggleButton} href="#Home">INICIO</a>
                    </h3>
                    <h3 className={styles.Menu__h3}>
                        <a onClick={toggleButton} href="#AboutMe">SOBRE MI</a>
                    </h3>
                    <h3 className={styles.Menu__h3}>
                        <a onClick={toggleButton} href="#Projects">PROYECTOS</a>
                    </h3>
                    <h3 className={styles.Menu__h3}>
                        <a onClick={toggleButton} href="#ContactMe">CONTACTAME</a>
                    </h3>
                </div>
            </nav>

            <div className={styles.textContainer}>
                <h1 className={styles.h1}>LAUTARO SILVERII</h1>

                <h3 className={styles.h3}>DESARROLLADOR WEB</h3>

                <div className={styles.Networks}>
                    <a className={styles.Networks__icon} href="https://www.facebook.com/lautaro.silverii.5"> 
                        <FaFacebookF/> 
                    </a>
                    <a className={styles.Networks__icon} href="https://www.linkedin.com/in/lautaro-silverii-8a5750209/">
                        <FaLinkedinIn />
                    </a>
                    <a className={styles.Networks__icon} href="https://github.com/Lauty128">
                        <FaGithub />
                    </a>
                </div>
            </div>

        </header>
    )
}