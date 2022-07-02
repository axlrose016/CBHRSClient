import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingEvaluationRoutingModule } from './training-evaluation-routing.module';
import { TrainingEvaluationEntryComponent } from './training-evaluation-entry/training-evaluation-entry.component';
import { TrainingEvaluationListComponent } from './training-evaluation-list/training-evaluation-list.component';


@NgModule({
  declarations: [TrainingEvaluationEntryComponent, TrainingEvaluationListComponent],
  imports: [
    CommonModule,
    TrainingEvaluationRoutingModule
  ]
})
export class TrainingEvaluationModule { }
