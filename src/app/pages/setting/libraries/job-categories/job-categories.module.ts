import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobCategoriesRoutingModule } from './job-categories-routing.module';
import { JobCategoryListComponent } from './job-category-list/job-category-list.component';
import { JobCategoryEntryComponent } from './job-category-entry/job-category-entry.component';
import { SharedComponentModule } from 'app/shared/component/shared-component.module';
import { SharedMaterialModule } from 'app/shared/shared-material/shared-material.module';


@NgModule({
  declarations: [JobCategoryListComponent, JobCategoryEntryComponent],
  imports: [
    CommonModule,
    JobCategoriesRoutingModule,
    SharedComponentModule,
    SharedMaterialModule
  ]
})
export class JobCategoriesModule { }
