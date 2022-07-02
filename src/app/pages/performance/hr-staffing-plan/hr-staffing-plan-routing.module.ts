import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HrStaffingPlanEntryComponent } from './hr-staffing-plan-entry/hr-staffing-plan-entry.component';
import { HrStaffingPlanListComponent } from './hr-staffing-plan-list/hr-staffing-plan-list.component';

const routes: Routes = [
  {
    path:'list',
    component:HrStaffingPlanListComponent
  },
  {
    path:':id',
    component:HrStaffingPlanEntryComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrStaffingPlanRoutingModule { }
