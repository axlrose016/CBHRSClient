import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentEntryComponent } from './department-entry/department-entry.component';
import { DepartmentListComponent } from './department-list/department-list.component';

const routes: Routes = [
  {
    path:'list',
    component:DepartmentListComponent,
  },
  {
    path:':id',
    component:DepartmentEntryComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
