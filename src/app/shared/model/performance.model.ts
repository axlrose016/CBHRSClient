import { Guid } from "guid-typescript";
import { PersonPDSDetail } from "./PersonPDS.model";

export interface BudgetUtilizationDetail{
    budgetUtilId?:Guid;
    totalBudgetJO?: number;
    totalBudgetPlantil?: number;
    amountSpentQ1JO?: number;
    amountSpentQ1Plantil?:number;
    amountSpentQ2JO?: number;
    amountSpentQ2Plantil?:number;
    amountSpentQ3JO?:number;
    amountSpentQ3Plantil?:number;
    amountSpentQ4JO?:number;
    amountSpentQ4Plantil?:number;
    is_funding_set_aside?:boolean;
    with_last_year_proposed_budget?:number;
    with_additional_proposed_budget?:number;
    deleted_by?:string;
    deleted_date?:Date;
    is_deleted?:boolean;
}

export interface BudgetUtilizationList_vw{
    budgetUtilId?: Guid;
    totalBudgetJO?: number;
    totalBudgetPlantil?: number;
    is_funding_set_aside?: boolean;
}

export interface OrganizationalGoalDetail{
    orgGoalId?: Guid;
    mandateOfOffice?: string;
    visionOfOffice?: string;
    missionOfOffice?: string;
    stratigicGoalsOfOffice?: string;
    deleted_by?:string;
    deleted_date?:Date;
    is_deleted?:boolean;
}

export interface OrganizationalGoalList
{
    orgGoalId?: Guid;
    missionOfOffice?: string;
    visionOfOffice?: string;
}

export interface HRStaffingPlanDetail{
    hrStaffingId?: Guid;
    existingNosPersonnelJO?:number;
    existingNosPersonnelPlantil?:number;
    nosFilledPosJO?:number;
    nosFilledPosPlantil?:number;
    nosUnfilledPosJO?:number;
    nosUnfilledPosPlantil?:number;
    nosProposedPosToChangeJO?:number;
    nosProposedPosToChangePlantil?:number;
    proposedNosPersonnelNextYrJO?:number;
    proposedNosPersonnelNextYrPlantil?:number;
    deleted_by?:string;
    deleted_date?:Date;
    is_deleted?:boolean;
}

export interface HRStaffingPlanList{
    hrStaffingId?:Guid;
    existingNosPersonnelJO?:number;
    existingNosPersonnelPlantil?: number;
}

export interface ComplaintDetail{
    complaintId?:Guid;
    officeId?:number;
    personId?:Guid;
    typeOfComplaint?:number;
    grievanceDetails?:string;
    complaineeId?:Guid; 
    emailAddressComplainant?:string;
    emailAddressSupervisor?:string;
    deleted_by?:string;
    deleted_date?:Date;
    is_deleted?:boolean;
    complaintName?:string;
    complaineeName?:string;
}

export interface ComplaintList{
    complaintId?:Guid;
    officeId?:string;
    typeOfComplaint?:string;
    complaintName?:string;
}