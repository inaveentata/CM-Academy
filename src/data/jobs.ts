import { JobProps } from "@/types/index"
import { v4 as uuidv4 } from 'uuid';

export const jobs:JobProps[] = [
    {
        id:uuidv4(),
        organisation:'cm acadamy',
        postName:'Software Engineer',
        lastDate:'20/06/2023',
        applyLink:'',
        notificationLink:''
    },
    {
        id:uuidv4(),
        organisation:'cm acadamy',
        postName:'Software Engineer',
        lastDate:'25/06/2023',
        applyLink:'',
        notificationLink:''
    },
    {
        id:uuidv4(),
        organisation:'cm acadamy',
        postName:'Software Engineer',
        lastDate:'',
        applyLink:'',
        notificationLink:''
    },
    {
        id:uuidv4(),
        organisation:'BHEL',
        postName:'Electrical Engineer',
        lastDate:'23/06',
        applyLink:'https://www.profbharat.in/',
        notificationLink:'https://drive.google.com/file/d/1S3hamzmivZFkqbuqM6553zUmjardsznO/view?usp=share_link'
    },

]
