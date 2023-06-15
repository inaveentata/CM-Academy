export type GenericProps = {
    id: string;
    organisation: string;
    lastDate: string;
    applyLink: string;
    notificationLink:string
  };
export type JobProps = GenericProps &{postName:string}
  export type AdmissionProps= GenericProps & {course:string}
  export type ScholarshipProps = GenericProps & {course:string}