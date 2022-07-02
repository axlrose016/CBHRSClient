import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningAndEvaluationRoutingModule } from './learning-and-evaluation-routing.module';
import { LearningAndEvaluationEntryComponent } from './learning-and-evaluation-entry/learning-and-evaluation-entry.component';
import { LearningAndEvaluationListComponent } from './learning-and-evaluation-list/learning-and-evaluation-list.component';


@NgModule({
  declarations: [LearningAndEvaluationEntryComponent, LearningAndEvaluationListComponent],
  imports: [
    CommonModule,
    LearningAndEvaluationRoutingModule
  ]
})
export class LearningAndEvaluationModule { }
