import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrStaffingPlanRoutingModule } from './hr-staffing-plan-routing.module';
import { HrStaffingPlanListComponent } from './hr-staffing-plan-list/hr-staffing-plan-list.component';
import { HrStaffingPlanEntryComponent } from './hr-staffing-plan-entry/hr-staffing-plan-entry.component';
import { SharedComponentModule } from 'app/shared/component/shared-component.module';
import { SharedMaterialModule } from 'app/shared/shared-material/shared-material.module';


@NgModule({
  declarations: [HrStaffingPlanListComponent, HrStaffingPlanEntryComponent],
  imports: [
    CommonModule,
    HrStaffingPlanRoutingModule,
    SharedComponentModule,
    SharedMaterialModule
  ]
})
export class HrStaffingPlanModule { }
