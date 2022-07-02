import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentEntryComponent } from './department-entry/department-entry.component';
import { SharedComponentModule } from 'app/shared/component/shared-component.module';
import { SharedMaterialModule } from 'app/shared/shared-material/shared-material.module';


@NgModule({
  declarations: [DepartmentListComponent, DepartmentEntryComponent],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    SharedComponentModule,
    SharedMaterialModule
  ]
})
export class DepartmentsModule { }
