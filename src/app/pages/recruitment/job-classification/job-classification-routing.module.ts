import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobClassificationEntryComponent } from './job-classification-entry/job-classification-entry.component';
import { JobClassificationListComponent } from './job-classification-list/job-classification-list.component';

const routes: Routes = [
  {
    path:'list',
    component:JobClassificationListComponent,
  },
  {
    path:':id',
    component:JobClassificationEntryComponent,
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobClassificationRoutingModule { }
