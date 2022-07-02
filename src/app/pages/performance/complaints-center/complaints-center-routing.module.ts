import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplaintsEntryComponent } from './complaints-entry/complaints-entry.component';
import { ComplaintsListComponent } from './complaints-list/complaints-list.component';

const routes: Routes = [
  {
    path:'list',
    component:ComplaintsListComponent
  },
  {
    path:':id',
    component:ComplaintsEntryComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplaintsCenterRoutingModule { }
