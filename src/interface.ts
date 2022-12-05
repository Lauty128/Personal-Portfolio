export interface ArticlesInterface{
    _id: string;
    alt: string;
    image: string;
    title: string;
    createdAt: string;
}

export interface technologiesInterface{
    id: number
    name: string
    icon: JSX.Element
}

export interface projectsInterface{
    id: string
    title: string
    description: string
    image: string
    linkCode: string
    linkPage: string
    technologies: technologiesInterface[]
}

export interface formValuesInterface{
    name:string;
    email:string;
    linkedin:string;
    message:string;
}