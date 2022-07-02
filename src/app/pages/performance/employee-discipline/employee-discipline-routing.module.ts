import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnderConstructionComponent } from 'app/pages/miscellaneous/under-construction/under-construction.component';
import { EmployeeDisciplineEntryComponent } from './employee-discipline-entry/employee-discipline-entry.component';
import { EmployeeDisciplineListComponent } from './employee-discipline-list/employee-discipline-list.component';

const routes: Routes = [
  {
    path:'list',
    component:UnderConstructionComponent
  },
  {
    path:':id',
    component:EmployeeDisciplineEntryComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeDisciplineRoutingModule { }
