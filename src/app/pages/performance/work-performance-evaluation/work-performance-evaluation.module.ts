import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkPerformanceEvaluationRoutingModule } from './work-performance-evaluation-routing.module';
import { WorkPerformanceEvaluatonListComponent } from './work-performance-evaluaton-list/work-performance-evaluaton-list.component';
import { WorkPerformanceEvaluatonEntryComponent } from './work-performance-evaluaton-entry/work-performance-evaluaton-entry.component';


@NgModule({
  declarations: [WorkPerformanceEvaluatonListComponent, WorkPerformanceEvaluatonEntryComponent],
  imports: [
    CommonModule,
    WorkPerformanceEvaluationRoutingModule
  ]
})
export class WorkPerformanceEvaluationModule { }
