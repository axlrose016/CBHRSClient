import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobEntryComponent } from './job-entry/job-entry.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobClassificationComponent } from './job-classification/job-classification.component'

const routes: Routes = [
  {
    path:'list',
    component:JobListComponent,
  },
  {
    path:'classification',
    component:JobClassificationComponent
  },
  {
    path:':id',
    component:JobEntryComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
