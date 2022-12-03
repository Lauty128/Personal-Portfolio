//-------------- Data
import { technologies, tools } from "../data/Technologies";

//-------------- Styles
import styles from "../styles/Skills.module.css"
import 'aos/dist/aos.css'; 

export default function Skills(){
 
    function Technologies():any{

        return technologies.map(technology=>{
            return  <div className={styles.Skills__icon} key={`${technology.id}`} title={technology.name} >
                        {technology.icon}
                    </div> 
        })
    }

    function Tools():any{

        return tools.map(tool=>{
            return  <div className={styles.Skills__icon} key={`${tool.id}`} title={tool.name} >
                        {tool.icon}
                    </div> 
        })
    }

    return(
        <section className={styles.Skills}>

            <h2 className={styles.Skills__h2}>TECNOLOGIAS</h2>
            <h2 className={styles.Skills__h2}>HERRAMIENTAS</h2>

            <div className={styles.Skills__technologies} data-aos="zoom-out-up" data-aos-duration="800"> 
                <Technologies />
            </div>
            <div className={styles.Skills__tools} data-aos="zoom-out-up" data-aos-duration="800">
                <Tools/>
            </div>

        </section>
    )
}