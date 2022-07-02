import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobListComponent } from './job-list/job-list.component';
import { JobEntryComponent } from './job-entry/job-entry.component';
import { SharedComponentModule } from 'app/shared/component/shared-component.module';
import { SharedMaterialModule } from 'app/shared/shared-material/shared-material.module';
import { JobClassificationComponent } from './job-classification/job-classification.component';


@NgModule({
  declarations: [JobListComponent, JobEntryComponent, JobClassificationComponent],
  imports: [
    CommonModule,
    JobsRoutingModule,
    SharedComponentModule,
    SharedMaterialModule
  ]
})
export class JobsModule { }
