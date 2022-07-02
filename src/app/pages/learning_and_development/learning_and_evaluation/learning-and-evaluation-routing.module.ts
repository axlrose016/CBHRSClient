import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnderConstructionComponent } from 'app/pages/miscellaneous/under-construction/under-construction.component';
import { LearningAndEvaluationEntryComponent } from './learning-and-evaluation-entry/learning-and-evaluation-entry.component';
import { LearningAndEvaluationListComponent } from './learning-and-evaluation-list/learning-and-evaluation-list.component';

const routes: Routes = [
  {
    path:'list',
    component:UnderConstructionComponent
  },
  {
    path:':id',
    component:LearningAndEvaluationEntryComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningAndEvaluationRoutingModule { }
