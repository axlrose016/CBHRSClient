import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceRatingRoutingModule } from './performance-rating-routing.module';
import { PerformanceRatingListComponent } from './performance-rating-list/performance-rating-list.component';
import { PerformanceRatingEntryComponent } from './performance-rating-entry/performance-rating-entry.component';
import { SharedComponentModule } from 'app/shared/component/shared-component.module';
import { SharedMaterialModule } from 'app/shared/shared-material/shared-material.module';


@NgModule({
  declarations: [PerformanceRatingListComponent, PerformanceRatingEntryComponent],
  imports: [
    CommonModule,
    PerformanceRatingRoutingModule,
    SharedComponentModule,
    SharedMaterialModule
  ]
})
export class PerformanceRatingModule { }
