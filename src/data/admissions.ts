import { AdmissionProps } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export const admissions:AdmissionProps[] = [
    {
        id:uuidv4(),
        organisation:'cm acadamy',
        course:'',
        lastDate:'20/06/2023',
        applyLink:'',
        notificationLink:''

    }
]