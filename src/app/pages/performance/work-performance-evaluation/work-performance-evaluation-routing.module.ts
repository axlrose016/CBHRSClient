import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkplaceApplicationPlanEntryComponent } from 'app/pages/learning_and_development/workplace-application-plan/workplace-application-plan-entry/workplace-application-plan-entry.component';
import { UnderConstructionComponent } from 'app/pages/miscellaneous/under-construction/under-construction.component';
import { WorkPerformanceEvaluatonListComponent } from './work-performance-evaluaton-list/work-performance-evaluaton-list.component';

const routes: Routes = [
  {
    path:'list',
    component:UnderConstructionComponent
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
export class WorkPerformanceEvaluationRoutingModule { }
