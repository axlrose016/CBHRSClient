import { Guid } from "guid-typescript";

export interface JobRequisitionDetail{
    requisitionId?:Guid;
    requestDate?:Date;
    requestTypeId?:number;
    departmentId?:number;
    locationAddress?:string;
    jobCategoryId?:number;
    jobTitle?:string;	
    salary?:number;
    jobDescription?:string;	
    qualification?:string;	
    isOpen?:boolean;	
    isApproved?:boolean;	
    closingDate?:Date;	
    deleted_by?:string;
    deleted_date?:Date;
    is_deleted?:boolean;
}

export interface JobRequisitionList{
    requisitionId?:Guid;
    requestDate?:Date;
    locationAddress?:string;
    jobTitle?:string;
    salary?:number;
    jobDescription?:string;
    qualification?:string;
    isOpen?:boolean;
    isApproved?:boolean;
    closingDate?:Date;
    request_type_desc?:string;
    department_desc?:string;
    job_category_desc?:string;
    
}