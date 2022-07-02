export class lib_region{
    region_code: string;
    region_name: string;
}

export class lib_province{
    region_code: string;
    prov_code: string;
    prov_name:string;
}

export class lib_city{
    prov_code: string;
    city_code: string;
    city_name: string;
}

export class lib_brgy{
    city_code: string;
    brgy_code: string;
    brgy_name: string;
}

export class lib_user_level{
    userLevelId?:number;
    description?:string;
    user_group_id?:number;
    is_active?:boolean;
}

export class lib_request_type{
    requestTypeId:number;
    description:string;
    is_active:boolean;
}

export class lib_department{
    departmentId:number;
    description:string;
    is_active:boolean;
}

export class lib_job_category{
    jobCategoryId:number;
    description:string;
    is_active:boolean;
}

export class lib_core_competency{
    coreCompetencyId?:number;
    description?:string;
    is_active?:boolean;
    libCompetencyCategory?:lib_competency_category[];
}

export class lib_competency_category{
    competencyId?:number;
    coreCompetencyId?:number;
    description?:string;
    is_active?:boolean;
}
