export interface JobClassificationList_vw{
    jobClassificationId?:number;
    occupationalServCode?:number;
    salary_grade?:number;
}

export interface JobClassificationDetail{
    jobClassificationId?:number;
    occupationalServCode?:number;
    numerical_suffix?:number;
    duties_and_responsibilities?:string;
    salary_grade?:number;
    is_active?:boolean;
}