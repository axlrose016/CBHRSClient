import { Guid } from "guid-typescript";
import { lib_competency_category, lib_core_competency, lib_department } from "./library.model";
import { PersonPDSDetail } from "./PersonPDS.model";

export interface WorkplaceApplicationPlanList{
    wapId?:Guid;
    personId?:Guid;
    firstName?:string;
    middleName?:string;
    lastName?:string;
    title?:string;
    provider?:string;
    date_conduct?:Date;
}

export interface WorkplaceApplicationPlanDetail{
    wapId?:Guid;
    personDetails?:PersonPDSDetail;
    title?:string;
    provider?:string;
    date_conduct?:Date;
    learningOutcome?:string;
    alignment?:string;
    startDate?:Date;
    endDate?:Date;
    objective?:string;
    output?:string;
    applicationPlanAndAccomplishments?:ApplicationPlanAndAccomplishmentsDetails[];
}

export interface WapDetail{
    wapId?:Guid;
    personId?:Guid;
    personDetails?:PersonPDSDetail;
    title?:string; 
    dateConduct?:Date; 
    provider?:string; 
    learningOutcome?:string; 
    // interventions?:InterventionCollection[];
    otherIntervention?:string;
    objectives?:string;
    output?:string;
    milestone?:number;
    whatNeedsToBeDone?:string;
    startDate?:Date;
    endDate?:Date;
    targetDays?:number;
    mov?:number; 
    rating?:number;
    reasonForNonAccomplishment?:number; 
    otherReason?:string;
    deleted_by?:string;
    deleted_date?:Date;
    is_deleted?:boolean;
    has_intervention_ipcr?:boolean;
    has_intervention_wfp?:boolean;
    has_intervention_csp?:boolean;
    has_intervention_cos?:boolean;
    has_intervention_idp?:boolean;
    has_intervention_others?:boolean;
    intervention_others?:string;
}

export interface InterventionCollection{
    rowId?:number;
    interventionId?:number;
}

export interface ApplicationPlanAndAccomplishmentsDetails{
    apaId?:Guid;
    milestone?:number;
    whatNeedsToBeDone?:string;
    targetDate?:Date;
    meansOfVerification?:string;
    dateAddressed?:Date;
    progress?:number;
    whatWasDone?:string;
    whatWasNotDone?:string;
    ReasonForNonAccomplish?:string;
    catchUpActivities?:string;
}

export interface LDNADetails{
    ldnaId?:Guid;
    departmentId?:number;
    ldnaResults?:LDNAResults[];
}

export interface LDNAList_vw{
    ldnaId?:Guid;
    departmentId?:number;
    departmentDesc?:string;
    // coreCompetencyId?:number;
    // coreCompetencyDesc?:string;
    // competencyId?:number;
    // competencyCategoryDesc?:string;
    // permanent?:number;
    // contractual?:number;
}

export interface LDNAResults{
    ldnaResultId?:Guid;
    coreCompetencyDesc?: lib_core_competency;
    coreCompetencyId?:number;
    competencyDesc?:lib_competency_category;
    competencyId?:number;
    permanent?:number;
    contractual?:number;
}

export interface LDNAConsolidatedReport{
    coreCompetency?:string;
    competencyCategory?:string;
    pmeD_Permanent?:number;
    pmeD_Contractual?:number;
    regulation_Licensing_and_Enforcement_Division_Permanent?:number;
    regulation_Licensing_and_Enforcement_Division_Contractual?:number;
    district_Provincial_Health_Teams_Permanent?:number;
    district_Provincial_Health_Teams_Contractual?:number;
}

export interface PerformanceRateDetails{
    performanceRateId?:Guid;
    personId?:Guid;
    personDetails?: PersonPDSDetail;
    isAnalytical?:boolean;
    isInitiative?:boolean;
    isInnovation?:boolean;
    isJobKnowledge?:boolean;
    isPlanningOrg?:boolean;
    isTeamwork?:boolean;
    isCommunication?:boolean;
    isBehavioralFactor?:boolean;
    grade?:number;
    scr_diverseInfo?:number;
    scr_researchesData?:number;
    scr_usesIntuition?:number;
    scr_identifiesData?:number;
    scr_designsWorkflows?:number;
    scr_volunteersReadily?:number;
    scr_undertakeSelfDev?:number;
    scr_seekIncResponsibilities?:number;
    scr_takeIndActions?:number;
    scr_takesAdvantage?:number;
    scr_askForHelp?:number;
    scr_creativity?:number;
    scr_resourceful?:number;
    scr_improveWork?:number;
    scr_devInnovateIdeas?:number;
    scr_competent?:number;
    scr_exhibitAbility?:number;
    scr_keepsAbreast?:number;
    scr_minimalSupervision?:number;
    scr_displaysUnderstanding?:number;
    scr_usesResources?:number;
    scr_plansWorkAct?:number;
    scr_usesTimeEff?:number;
    scr_plansForAddResources?:number;
    scr_integratesChanges?:number;
    scr_setsGoals?:number;
    scr_worksOrganizedManner?:number;
    scr_balancesTeam?:number;
    scr_exhibitsObjective?:number;
    scr_welcomesFeedback?:number;
    scr_contribute?:number;
    scr_putsSuccess?:number;
    scr_expressesIdeas?:number;
    scr_writesClearly?:number;
    scr_exhibitsGoodListening?:number;
    scr_keepsOtherAdequate?:number;
    scr_usesAppCom?:number;
    scr_presenDataEff?:number;
    scr_courtesy?:number;
    scr_humanRelations?:number;
    scr_integrity?:number;
    scr_stressTolerance?:number;
    scr_complianceToOffice?:number;
    scr_punctuality?:number;
    grandTotal?:number;
    avgPoint?:number;
    deleted_by?:string;
    deleted_date?:Date;
    is_deleted?:boolean;
}

export interface PerformanceRateResult{
    performanceRateId?:Guid;
    firstName?:string;
    lastName?:string;
    middleName?:string;
    grandTotal?:number;
    avgPoint?:number;
}