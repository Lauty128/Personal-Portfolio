//-------------- Data
import { languages, technologies, tools, frameworks } from "../data/Technologies";

//-------------- Interface
import { technologiesInterface } from "../interface";

//-------------- Styles
import styles from "../styles/Skills.module.css"


export default function Skills(){
 
    //-------------------- Load Icons
    function Technologies( data:technologiesInterface[] ): JSX.Element[]{
        return data.map((element):JSX.Element =>{
            return  <div className={styles.icon} key={`${element.id}`} title={element.name} >
                        {element.icon}
                    </div> 
        })
    }

    //-------------------- Return
    return(
        <section className={styles.section} id="Skills">

            <div className={styles.container} data-aos="zoom-out-up" data-aos-duration="600"> 
                <h2 className={styles.h2}>LENGUAJES</h2>
                { Technologies(languages) }
            </div>

            <div className={styles.container} data-aos="zoom-out-up" data-aos-duration="600">
                <h2 className={styles.h2}>HERRAMIENTAS</h2>
                { Technologies(tools) }
            </div>

            <div className={styles.container} data-aos="zoom-out-up" data-aos-duration="600">
                <h2 className={`${styles.h2} ${styles.frameworkTitle}`}>FRAMEWORKS & LIBRERIAS</h2>
                { Technologies(frameworks) }
            </div>
            
            <div className={styles.container} data-aos="zoom-out-up" data-aos-duration="600"> 
                <h2 className={styles.h2}>TECNOLOGIAS</h2>
                { Technologies(technologies) }
            </div>

        </section>
    )
}