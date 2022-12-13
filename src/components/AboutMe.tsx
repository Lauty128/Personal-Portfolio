//-------------- Imports
import { useState, useEffect } from "react"

//-------------- Assets
import { FaFileAlt } from "react-icons/fa"
import image from "../assets/retrato.jpg"

//-------------- Styles
import styles from "../styles/AboutMe.module.css"

//-------------- Interface
import { ArticlesInterface } from "../interface"

export default function AboutMe(){

    const [ articles, setArticles ] = useState <ArticlesInterface[] | null>(null)  
    //Array<interface.Articles> * This is valid *

    useEffect(()=>{
        fetch("https://silveriiblog.up.railway.app/api/all", {mode:"cors"})
            .then(response => response.json())
            .then(data=>{
                const articles = data.slice(0,3)
                setArticles(articles)
            })
    }, [])

    function Articles():JSX.Element | JSX.Element[]{
        if(articles === null){
            const repeat = [0,1,2]
            return repeat.map((element)=>{
                return <div className={styles.ArticlePreload} key={element}>
                            <div className={styles.ArticlePreload__img}></div>
                            <div className={styles.ArticlePreload__div}>
                                <div className={styles.ArticlePreload__text}></div>
                                <div className={styles.ArticlePreload__title}></div>
                            </div>
                        </div> 
            })
    }

        return articles.map(article=>{
            const date = new Date(article.createdAt)
            return( 
            <a href={`https://silveriiblog.up.railway.app/articles/${article._id}`} className={styles.Article} key={article._id}>
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
                    Hola, mi nombre es Lautaro, tengo 19 años y estoy en busca de mi primer trabajo como desarrollador web. <br />
                    Comencé en este mundo de la programación de manera autodidacta, obteniendo información y aprovechando cualquier oportunidad para poder aprender algo nuevo.
                    Tengo muchas ganas de poder comenzar mi carrera profesional, obtener experiencia y aprender mucho mas
                    </p>
                    <a id="buttonProjects" href="https://drive.google.com/file/d/1eZ0bRhxprRA8S1WOwx1_GFeMCy6NOL4J/view?usp=sharing" 
                    className={styles.AboutMe__button}>
                        <div className={styles.AboutMe__effectButton}></div>
                        <FaFileAlt />
                        <h4 className={styles.AboutMe__h4}>DESCARGAR CV</h4>
                    </a>
                </div>
            </div>

            <div className={styles.Section}>
                <div className={styles.MoreInfo}>
                    <h2 className={styles.MoreInfo__title}>MAS INFORMACION</h2>
                    <p className={styles.MoreInfo__text}>Como dije anteriormente, ingrese en el mundo de la programación de manera totalmente autodidacta, aprendiendo de videos, foros y muchos errores 😁.  <br />
                    Primero realice algunos proyectos con HTML, CSS y JavaScript puro hasta poder dominarlos bastante bien, luego comenzó a llamarme la atención NodeJS  y comencé a trabajar con el, junto a ExpressJS, con el fin de crear mi propio servidor.
                    En el 2022 me di cuenta de que me interesaba mas el lado del front-end, por lo que comencé con React, con el cual sigo aprendiendo e informándome de cosas nuevas. Justo este proyecto esta realizado con React y TypeScript, utilizando Vite para crear el proyecto ya configurado.  <br />
                    Si quieres saber mas sobre mi puedes entrar a mi blog y ver el contenido que subo. Es un proyecto al cual le dedico bastante tiempo y que dia a dia trabajo para poder mejorarlo.
                    </p>
                    
                    <a className={styles.MoreInfo__button} href="https://silveriiblog.up.railway.app">
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