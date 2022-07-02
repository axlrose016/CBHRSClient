import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDisciplineRoutingModule } from './employee-discipline-routing.module';
import { EmployeeDisciplineListComponent } from './employee-discipline-list/employee-discipline-list.component';
import { EmployeeDisciplineEntryComponent } from './employee-discipline-entry/employee-discipline-entry.component';


@NgModule({
  declarations: [EmployeeDisciplineListComponent, EmployeeDisciplineEntryComponent],
  imports: [
    CommonModule,
    EmployeeDisciplineRoutingModule
  ]
})
export class EmployeeDisciplineModule { }
