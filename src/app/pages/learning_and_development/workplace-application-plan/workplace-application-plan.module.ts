import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkplaceApplicationPlanRoutingModule } from './workplace-application-plan-routing.module';
import { WorkplaceApplicationPlanListComponent } from './workplace-application-plan-list/workplace-application-plan-list.component';
import { WorkplaceApplicationPlanEntryComponent } from './workplace-application-plan-entry/workplace-application-plan-entry.component';
import { SharedComponentModule } from 'app/shared/component/shared-component.module';
import { SharedMaterialModule } from 'app/shared/shared-material/shared-material.module';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@NgModule({
  declarations: [WorkplaceApplicationPlanListComponent, WorkplaceApplicationPlanEntryComponent],
  imports: [
    CommonModule,
    WorkplaceApplicationPlanRoutingModule,
    SharedComponentModule,
    SharedMaterialModule
  ],
})
export class WorkplaceApplicationPlanModule { }
