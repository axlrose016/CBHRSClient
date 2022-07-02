import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetencyCategoryEntryComponent } from './competency-category-entry/competency-category-entry.component';
import { CompetencyCategoryListComponent } from './competency-category-list/competency-category-list.component';

const routes: Routes = [
  {
    path:'list',
    component:CompetencyCategoryListComponent,
  },
  {
    path:':id',
    component:CompetencyCategoryEntryComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetencyCategoriesRoutingModule { }
