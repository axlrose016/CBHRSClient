import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplaintsCenterRoutingModule } from './complaints-center-routing.module';
import { ComplaintsListComponent } from './complaints-list/complaints-list.component';
import { ComplaintsEntryComponent } from './complaints-entry/complaints-entry.component';
import { SharedComponentModule } from 'app/shared/component/shared-component.module';
import { SharedMaterialModule } from 'app/shared/shared-material/shared-material.module';


@NgModule({
  declarations: [ComplaintsListComponent, ComplaintsEntryComponent],
  imports: [
    CommonModule,
    ComplaintsCenterRoutingModule,
    SharedComponentModule,
    SharedMaterialModule
  ]
})
export class ComplaintsCenterModule { }
