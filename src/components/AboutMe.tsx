//-------------- Imports
import { useState, useEffect } from "react"

//-------------- Assets
import { FaArrowDown } from "react-icons/fa"
import image from "../assets/retrato-vertical.jpg"

//-------------- Styles
import styles from "../styles/AboutMe.module.css"

//-------------- Interface
import { ArticlesInterface } from "../interface"

export default function AboutMe(){

    const [ articles, setArticles ] = useState <ArticlesInterface[] | null>(null)  
    //Array<interface.Articles> * This is valid *

    useEffect(()=>{
        fetch("https://blog-production-dfa3.up.railway.app/api/all", {mode:"cors"})
            .then(response => response.json())
            .then(data=>{
                const articles = data.slice(0,3)
                setArticles(articles)
            })
    }, [])

    function Articles():JSX.Element | JSX.Element[]{
        if(articles === null) return( 
            <div>
                <span>Cargando..</span>
            </div> 
        )

        return articles.map(article=>{
            const date = new Date(article.createdAt)
            return( 
            <a href={`https://blog-production-dfa3.up.railway.app/articles/${article._id}`} className={styles.Article} key={article._id}>
                <img src={article.image} alt={article.alt} className={styles.Article__img} data-aos="fade-left" />
                <div className={styles.Article__div}  data-aos="fade-left">
                    <span className={styles.Article__span}>{date.toLocaleDateString("es-ES",{year: "numeric", month: "long", day: "numeric"})}</span>
                    <h3 className={styles.Article__h3}>{article.title}</h3>
                </div>
            </a>
            )
        })
        
    }


    return(
        <section id="AboutMe" className={styles.Container}>
            
            <div className={styles.AboutMe}>
                <div className={styles.AboutMe__imgContainer}>
                    <img src={image} alt="Imagen Mia" className={styles.AboutMe__img} data-aos="zoom-in" data-aos-delay="100"/>
                </div>
                <div className={styles.AboutMe__textContainer}>
                    <h3 className={styles.AboutMe__h3}>SOBRE MI</h3>
                    <p className={styles.AboutMe__p}>
                        Mis habilidades se centran esencialmente en HTML, CSS y Javascript. También cuento 
                        con conocimientos en Git para trabajar en equipo y algunas herramientas de diseño 
                        como Figma y Canvas.
                        <br />
                        Cuento con una gran capacidad de aprendizaje, trabajo en equipo y buena adaptación 
                        al grupo. Tengo varias cualidades para aportar.
                    </p>
                    <a id="buttonProjects" href="#sectionProjects" className={styles.AboutMe__button}>
                        <div className={styles.AboutMe__effectButton}>
                        </div>
                        <h4 className={styles.AboutMe__h4}>PROYECTOS</h4>
                        <FaArrowDown />
                    </a>
                </div>
            </div>

            <div className={styles.Section}>
                <div className={styles.MoreInfo}>
                    <h2 className={styles.MoreInfo__title}>MAS INFORMACION</h2>
                    <p className={styles.MoreInfo__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatum modi nulla in odit nisi et voluptates harum, numquam aliquid eaque ut repudiandae. Quasi repudiandae, veniam neque delectus at aliquid facilis nulla aspernatur veritatis doloribus, repellendus eaque, quas doloremque qui! Accusantium commodi sequi quam eligendi eius labore! Praesentium iusto molestias officiis error pariatur eius odit adipisci quis eveniet temporibus quos harum deserunt dolores quisquam distinctio labore nulla cum, ea eligendi recusandae? Quas eos delectus animi dolor ratione porro, similique distinctio? <br /> <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatum modi nulla in odit nisi et voluptates harum, numquam aliquid eaque ut repudiandae. Quasi repudiandae, veniam neque
                    </p>
                    
                    <a className={styles.MoreInfo__button} href="https://blog-production-dfa3.up.railway.app/">
                        ECHALE UN VISTAZO!
                    </a>
                </div>

                <div className={styles.Aside}>
                    <div className={styles.Aside__articlesContainer}>
                        <h2 className={styles.Aside__title}>ULTIMOS POST</h2>
                        { Articles() }
                    </div>
                </div>
            </div>


        </section>
    )
}