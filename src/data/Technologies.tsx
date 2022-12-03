//-------------- Icons
import { FaHtml5, FaCss3Alt, FaJsSquare, 
    FaNodeJs, FaReact, FaSass,
     FaFigma, FaGitAlt  } from "react-icons/fa"
import { SiCanva } from "react-icons/si"

//-------------- Arrays

const technologies = [
    {
        id:0,
        name:"Html",
        icon: <FaHtml5 />
    },
    {
        id:1,
        name:"Css",
        icon: <FaCss3Alt />
    },
    {
        id:2,
        name:"Sass",
        icon: <FaSass />
    },
    {
        id:3,
        name:"JavaScript",
        icon: <FaJsSquare />
    },
    {
        id:4,
        name:"ReactJS",
        icon: <FaReact />
    },
    {
        id:5,
        name:"NodeJS",
        icon: <FaNodeJs />
    }
]

const tools = [
    {
        id:0,
        name:"Git",
        icon: <FaGitAlt />
    },
    {
        id:1,
        name:"Figma",
        icon: <FaFigma />
    },
    {
        id:2,
        name:"Canva",
        icon: <SiCanva />
    }
]



export {
    technologies,
    tools
}


