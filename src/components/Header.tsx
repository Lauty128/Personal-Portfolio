//-------------- Styles
import styles from "../styles/Header.module.css"

//-------------- Icons
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa"


export default function Header(){

    document.addEventListener("scroll",()=>{
        const menuDiv:any = document.getElementById("Menu")
        
        if(window.scrollY > 600){ 
            menuDiv.classList.add("Menu--active")
        }else if(menuDiv.classList.contains("Menu--active")){
            menuDiv.classList.remove("Menu--active")
        }
    })

    return (
        <header id="Home">
            <nav className={styles.Menu} id="Menu">
                <h3 className={styles.Menu__h3}><a href="#Home">INICIO</a></h3>
                <h3 className={styles.Menu__h3}><a href="#AboutMe">SOBRE MI</a></h3>
                <h3 className={styles.Menu__h3}><a href="#Projects">PROYECTOS</a></h3>
                <h3 className={styles.Menu__h3}><a href="#ContactMe">CONTACTAME</a></h3>
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