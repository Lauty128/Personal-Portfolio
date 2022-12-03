//-------------- Data
import { technologies, tools } from "../data/Technologies";

//-------------- Styles
import styles from "../styles/Skills.module.css"


//-------------- Export Function
export default function Skills(){
 
    //-------------------- Technologies Box
    function Technologies():JSX.Element[]{
        return technologies.map((technology):JSX.Element =>{
            return  <div className={styles.Skills__icon} key={`${technology.id}`} title={technology.name} >
                        {technology.icon}
                    </div> 
        })
    }

    //-------------------- Tools Box
    function Tools():JSX.Element[]{
        return tools.map((tool):JSX.Element =>{
            return  <div className={styles.Skills__icon} key={`${tool.id}`} title={tool.name} >
                        {tool.icon}
                    </div> 
        })
    }

    //-------------------- Return
    return(
        <section className={styles.Skills}>

            <h2 className={styles.Skills__h2}>TECNOLOGIAS</h2>
            <h2 className={styles.Skills__h2}>HERRAMIENTAS</h2>

            <div className={styles.Skills__technologies} data-aos="zoom-out-up" data-aos-duration="800"> 
                { Technologies() }
            </div>
            <div className={styles.Skills__tools} data-aos="zoom-out-up" data-aos-duration="800">
                { Tools() }
            </div>

        </section>
    )
}