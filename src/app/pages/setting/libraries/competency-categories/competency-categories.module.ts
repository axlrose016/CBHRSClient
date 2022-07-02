import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetencyCategoriesRoutingModule } from './competency-categories-routing.module';
import { CompetencyCategoryListComponent } from './competency-category-list/competency-category-list.component';
import { CompetencyCategoryEntryComponent } from './competency-category-entry/competency-category-entry.component';
import { SharedComponentModule } from 'app/shared/component/shared-component.module';
import { SharedMaterialModule } from 'app/shared/shared-material/shared-material.module';


@NgModule({
  declarations: [CompetencyCategoryListComponent, CompetencyCategoryEntryComponent],
  imports: [
    CommonModule,
    CompetencyCategoriesRoutingModule,
    SharedComponentModule,
    SharedMaterialModule
  ]
})
export class CompetencyCategoriesModule { }
