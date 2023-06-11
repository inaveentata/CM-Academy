import { NotificatioProps } from "@/types/index"
import { v4 as uuidv4 } from 'uuid';
export const notifications:NotificatioProps[] = [
    {
        id:uuidv4(),
        issueDate:'09/06/2023',
        organisation:'cm acadamy',
        postName:'Software engineer',
        appointmentMethod:'Interview',
        lastDate:'20/06/2023',
        applyLink:'',
        notificationLink:''
    },
    {
        id:uuidv4(),
        issueDate:'10/06/2023',
        organisation:'cm acadamy',
        postName:'Support engineer',
        appointmentMethod:'Interview',
        lastDate:'20/06/2023',
        applyLink:'',
        notificationLink:''
    },

]