import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClearanceRoutingModule } from './clearance-routing.module';
import { ClearanceListComponent } from './clearance-list/clearance-list.component';
import { ClearanceEntryComponent } from './clearance-entry/clearance-entry.component';
import { SharedComponentModule } from 'app/shared/component/shared-component.module';
import { SharedMaterialModule } from 'app/shared/shared-material/shared-material.module';


@NgModule({
  declarations: [ClearanceEntryComponent,ClearanceListComponent],
  imports: [
    CommonModule,
    ClearanceRoutingModule,
    SharedComponentModule,
    SharedMaterialModule
  ]
})
export class ClearanceModule { }
