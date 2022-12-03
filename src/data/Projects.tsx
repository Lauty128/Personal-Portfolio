//-------------- Icons
import { FaHtml5, FaCss3Alt, FaJsSquare, 
    FaNodeJs, FaReact, FaSass,
     FaFigma, FaGitAlt  } from "react-icons/fa"
import { SiCanva } from "react-icons/si"

//--------------- interfaces
import { technologies, projects } from "../interface"

//--------------- Images

const ProjectsData:projects[] = [
    {
        id:"p0",
        title:"Personal Blog",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse a culpa non incidunt sunt sapiente? Maxime tempore molestiae nemo et doloremque modi voluptate, beatae rerum ex illo, ducimus quasi alias adipisci id, recusandae dolor unde nisi. Consequuntur quidem beatae incidunt. Quas, reiciendis sapiente temporibus unde hic voluptates deleniti sit accusantium?",
        image:"https://res.cloudinary.com/dyrpgj8od/image/upload/f_auto,q_auto/v1670001133/blogImg_if9iew.png",
        linkCode: "https://github.com/Lauty128/Blog",
        linkPage: "https://blog-production-dfa3.up.railway.app/",
        technologies: [
            {
                id: 0,
                name: "NodeJS",
                icon: <FaNodeJs />
            },
            {
                id: 1,
                name: "JavaScript",
                icon: <FaJsSquare />
            },
            {
                id: 2,
                name: "Sass",
                icon: <FaSass />
            },
            {
                id: 3,
                name: "Html",
                icon: <FaHtml5 />
            },
            {
                id: 4,
                name: "Git",
                icon: <FaGitAlt />
            }
        ]
    },
    {
        id:"p1",
        title:"Personal Blog",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse a culpa non incidunt sunt sapiente? Maxime tempore molestiae nemo et doloremque modi voluptate, beatae rerum ex illo, ducimus quasi alias adipisci id, recusandae dolor unde nisi. Consequuntur quidem beatae incidunt. Quas, reiciendis sapiente temporibus unde hic voluptates deleniti sit accusantium?",
        image:"https://res.cloudinary.com/dyrpgj8od/image/upload/f_auto,q_auto/v1670001133/blogImg_if9iew.png",
        linkCode: "https://github.com/Lauty128/Blog",
        linkPage: "https://blog-production-dfa3.up.railway.app/",
        technologies: [
            {
                id: 0,
                name: "NodeJS",
                icon: <FaNodeJs />
            },
            {
                id: 1,
                name: "JavaScript",
                icon: <FaJsSquare />
            },
            {
                id: 2,
                name: "Sass",
                icon: <FaSass />
            },
            {
                id: 3,
                name: "Html",
                icon: <FaHtml5 />
            },
            {
                id: 4,
                name: "Git",
                icon: <FaGitAlt />
            }
        ]
    }
]


export { ProjectsData }