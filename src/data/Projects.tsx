//-------------- Icons
import { FaHtml5, FaCss3Alt, FaJsSquare, 
    FaNodeJs, FaReact, FaSass } from "react-icons/fa"
import { SiTypescript, SiJson, SiMongodb } from "react-icons/si"

//--------------- interface
import { projectsInterface } from "../interface"


const ProjectsData:projectsInterface[] = [
    {
        id:"bqef3f9ehr",
        title:"Personal Blog",
        description:`Hecho con NodeJs, utilizando ExpressJS. Es un blog personal con un estilo minimalista, el cual no está terminado, pero que ya cuenta con lo suficiente para estar en funcionamiento. Existe un servicio de login, pero solo es para administrar el blog. Este login trabaja directamente con cookies, ya que no es necesario implementar un JWT. 
        El resto es un poco de información sobre el blog y los artículos del mismo, cuenta con algunas animaciones y está adaptado para dispositivos móviles`,
        image:"https://res.cloudinary.com/dyrpgj8od/image/upload/f_auto,q_auto/v1670001133/Portfolio/blogImg_if9iew.png",
        linkCode: "https://github.com/Lauty128/Blog",
        linkPage: "https://blog-production-dfa3.up.railway.app/",
        technologies: [
            {
                id: 0,
                name: "Html",
                icon: <FaHtml5 />
            },
            {
                id: 1,
                name: "NodeJS",
                icon: <FaNodeJs />
            },
            {
                id: 2,
                name: "JavaScript",
                icon: <FaJsSquare />
            },
            {
                id: 3,
                name: "Sass",
                icon: <FaSass />
            },
            {
                id: 4,
                name: "MongoDB",
                icon: <SiMongodb />
            }
        ]
    },
    {
        id:"z9dc59otjm",
        title:"Portfolio",
        description:`Este proyecto fue realizado con ReactJS y Typescript. Para crear el proyecto utilicé Vite, el cual me configuro el proyecto para trabajarlo con estas dos tecnologías. No tengo conocimientos avanzados sobre Typescript, pero me pareció una buena forma de comenzar a utilizarlo y aprender más sobre el mismo.
        El portafolio tiene un diseño sencillo, cuenta con interactividad, un formulario para enviarme información de contacto, algunas animaciones y es responsivo.`,
        image:"https://res.cloudinary.com/dyrpgj8od/image/upload/f_auto,q_auto/v1670029496/Portfolio/portfolioImage_pkucwh.png",
        linkCode: "https://github.com/Lauty128/Personal-Portfolio",
        linkPage: "https://lauty128.github.io/Personal-Portfolio/",
        technologies: [
            {
                id: 0,
                name: "React",
                icon: <FaReact />
            },
            {
                id: 1,
                name: "TypeScript",
                icon: <SiTypescript />
            },
            {
                id: 2,
                name: "Css",
                icon: <FaCss3Alt />
            },
            {
                id:3,
                name: "Json",
                icon: <SiJson />
            }
        ]
    },
    {
        id:"7bd015rfa8",
        title:"Juego 'Ta-te-ti'",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse a culpa non incidunt sunt sapiente? Maxime tempore molestiae nemo et doloremque modi voluptate, beatae rerum ex illo, ducimus quasi alias adipisci id, recusandae dolor unde nisi. Consequuntur quidem beatae incidunt. Quas, reiciendis sapiente temporibus unde hic voluptates deleniti sit accusantium?",
        image:"https://res.cloudinary.com/dyrpgj8od/image/upload/f_auto,q_auto/v1670075683/Portfolio/ta-te-ti_game_ut67e4.png",
        linkCode: "https://github.com/Lauty128/TicTacToe-Game",
        linkPage: "https://lauty128.github.io/TicTacToe-Game/",
        technologies: [
            {
                id: 0,
                name: "Html",
                icon: <FaHtml5 />
            },
            {
                id: 1,
                name: "Css",
                icon: <FaCss3Alt />
            },
            {
                id: 2,
                name: "JavaScript",
                icon: <FaJsSquare />
            }
        ]
    },
    {
        id:"bivyq538uu",
        title:"Convertir numero natural a romano",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse a culpa non incidunt sunt sapiente? Maxime tempore molestiae nemo et doloremque modi voluptate, beatae rerum ex illo, ducimus quasi alias adipisci id, recusandae dolor unde nisi. Consequuntur quidem beatae incidunt. Quas, reiciendis sapiente temporibus unde hic voluptates deleniti sit accusantium?",
        image:"https://res.cloudinary.com/dyrpgj8od/image/upload/f_auto,q_auto/v1670075683/Portfolio/converterToRoman_vtf5c3.png",
        linkCode: "https://github.com/Lauty128/Coverter-Number-Natural-to-Roman",
        linkPage: "https://lauty128.github.io/Coverter-Number-Natural-to-Roman/",
        technologies: [
            {
                id: 0,
                name: "Html",
                icon: <FaHtml5 />
            },
            {
                id: 1,
                name: "Css",
                icon: <FaCss3Alt />
            },
            {
                id: 2,
                name: "JavaScript",
                icon: <FaJsSquare />
            }
        ]
    },
    {
        id:"bij1leawo0",
        title:"Juego 'Piedra, Papel o Tijera'",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse a culpa non incidunt sunt sapiente? Maxime tempore molestiae nemo et doloremque modi voluptate, beatae rerum ex illo, ducimus quasi alias adipisci id, recusandae dolor unde nisi. Consequuntur quidem beatae incidunt. Quas, reiciendis sapiente temporibus unde hic voluptates deleniti sit accusantium?",
        image:"https://res.cloudinary.com/dyrpgj8od/image/upload/f_auto,q_auto/v1670075683/Portfolio/game_onshgx.png",
        linkCode: "https://github.com/Lauty128/Game",
        linkPage: "https://lauty128.github.io/Game/",
        technologies: [
            {
                id: 0,
                name: "Html",
                icon: <FaHtml5 />
            },
            {
                id: 1,
                name: "Css",
                icon: <FaCss3Alt />
            },
            {
                id: 2,
                name: "JavaScript",
                icon: <FaJsSquare />
            }
        ]
    }
]


export { ProjectsData }