import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobCategoryEntryComponent } from './job-category-entry/job-category-entry.component';
import { JobCategoryListComponent } from './job-category-list/job-category-list.component';

const routes: Routes = [
  {
    path:'list',
    component:JobCategoryListComponent
  },
  {
    path:':id',
    component:JobCategoryEntryComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobCategoriesRoutingModule { }
