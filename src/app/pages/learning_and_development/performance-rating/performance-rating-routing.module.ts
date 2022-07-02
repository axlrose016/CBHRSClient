import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerformanceRatingEntryComponent } from './performance-rating-entry/performance-rating-entry.component';
import { PerformanceRatingListComponent } from './performance-rating-list/performance-rating-list.component';

const routes: Routes = [
  {
    path:'list',
    component:PerformanceRatingListComponent
  },
  {
    path:':id',
    component:PerformanceRatingEntryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformanceRatingRoutingModule { }
