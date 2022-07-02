import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnderConstructionComponent } from 'app/pages/miscellaneous/under-construction/under-construction.component';
import { TrainingEvaluationEntryComponent } from './training-evaluation-entry/training-evaluation-entry.component';
import { TrainingEvaluationListComponent } from './training-evaluation-list/training-evaluation-list.component';

const routes: Routes = [
  {
    path:'list',
    component:UnderConstructionComponent
  },
  {
    path:':id',
    component:TrainingEvaluationEntryComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingEvaluationRoutingModule { }
