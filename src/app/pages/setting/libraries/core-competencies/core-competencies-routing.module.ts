import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreCompetencyEntryComponent } from './core-competency-entry/core-competency-entry.component';
import { CoreCompetencyListComponent } from './core-competency-list/core-competency-list.component';

const routes: Routes = [
  {
    path:'list',
    component:CoreCompetencyListComponent,
  },
  {
    path:':id',
    component:CoreCompetencyEntryComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreCompetenciesRoutingModule { }
