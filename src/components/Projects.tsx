//-------------- Import
import { ProjectsData } from "../data/Projects"

//-------------- Assets
import { FaCode, FaEye } from "react-icons/fa"

//-------------- Styles
import styles from "../styles/Projects.module.css"


export default function Projects(){

    function ProjectsCard():JSX.Element | JSX.Element[]{

        return ProjectsData.map(project=>{

            return(  
                <div className={styles.Project} key={project.id} data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                    <div className={styles.Project__imgContainer}>
                        <img src={project.image} alt="alt de imagen" />
                        <div className={styles.technologies}>
                            {
                            project.technologies.map(technology=>{
                                return <div key={`${technology.id}`} className={styles.technology} title={technology.name}>
                                    {technology.icon}
                                    </div>
                                })
                            }
                        </div>
                    </div>

                    <div className={styles.Project__textContainer}>
                        <h3 className={styles.Project__title}>{project.title}</h3>
                        <p className={styles.Project__description}>{project.description}</p>
                        <button className={styles.Project__button}> 
                        <a href={project.linkCode}><FaCode /> Codigo</a> 
                        </button>
                        <button className={styles.Project__button}> 
                        <a href={project.linkPage}><FaEye /> Pagina</a>
                        </button>
                    </div>
                </div>
            )
        
        })

    }

    return(
        <section className={styles.Projects} id="Projects">
            
            <h2 className={styles.Projects__title}>PROYECTOS</h2>

            <div className={styles.Projects__container}>
                { ProjectsCard() }
            </div>

        </section>
    )
}