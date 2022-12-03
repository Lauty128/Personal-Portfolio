export interface ArticlesInterface{
    _id: string;
    alt: string;
    image: string;
    title: string;
    createdAt: string;
}

export interface technologies{
    id: number
    name: string
    icon: JSX.Element
}

export interface projects{
    id: string
    title: string
    description: string
    image: string
    linkCode: string
    linkPage: string
    technologies: technologies[]
}