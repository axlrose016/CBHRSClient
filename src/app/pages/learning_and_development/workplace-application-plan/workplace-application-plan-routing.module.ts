import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkplaceApplicationPlanEntryComponent } from './workplace-application-plan-entry/workplace-application-plan-entry.component';
import { WorkplaceApplicationPlanListComponent } from './workplace-application-plan-list/workplace-application-plan-list.component';

const routes: Routes = [
  {
    path:'list',
    component:WorkplaceApplicationPlanListComponent,
  },
  {
    path:':id',
    component:WorkplaceApplicationPlanEntryComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkplaceApplicationPlanRoutingModule { }
