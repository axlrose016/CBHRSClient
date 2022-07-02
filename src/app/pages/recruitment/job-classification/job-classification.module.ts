import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobClassificationRoutingModule } from './job-classification-routing.module';
import { JobClassificationListComponent } from './job-classification-list/job-classification-list.component';
import { JobClassificationEntryComponent } from './job-classification-entry/job-classification-entry.component';
import { SharedComponentModule } from 'app/shared/component/shared-component.module';
import { SharedMaterialModule } from 'app/shared/shared-material/shared-material.module';


@NgModule({
  declarations: [JobClassificationListComponent, JobClassificationEntryComponent],
  imports: [
    CommonModule,
    JobClassificationRoutingModule,
    SharedComponentModule,
    SharedMaterialModule
  ]
})
export class JobClassificationModule { }
