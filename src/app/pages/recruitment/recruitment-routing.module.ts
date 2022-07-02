import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobEntryComponent } from './jobs/job-entry/job-entry.component';
import { JobListComponent } from './jobs/job-list/job-list.component';

const routes: Routes = [
  // {
  //   path:'jobs',
  //   loadChildren:()=> import('./jobs/jobs.module').then(m => m.JobsModule),
  //   data:{breadcrumb:'JOBS'}
  // },
  {
    path:'appointment-and-compensation',
    loadChildren:()=> import('./appointment-and-compensation/appointment-and-compensation.module').then(m => m.AppointmentAndCompensationModule),
    data:{breadcrumb:'APPOINTMENT_AND_COMPENSATION'}
  },
  {
    path:'job-classification',
    loadChildren:()=> import('./job-classification/job-classification.module').then(m => m.JobClassificationModule),
    data:{breadcrumb:'JOB-CLASSIFICATION'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruitmentRoutingModule { }
