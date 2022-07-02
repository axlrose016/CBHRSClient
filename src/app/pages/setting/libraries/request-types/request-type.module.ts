import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestTypeRoutingModule } from './request-type-routing.module';
import { RequestTypeListComponent } from './request-type-list/request-type-list.component';
import { RequestTypeEntryComponent } from './request-type-entry/request-type-entry.component';
import { SharedComponentModule } from 'app/shared/component/shared-component.module';
import { SharedMaterialModule } from 'app/shared/shared-material/shared-material.module';


@NgModule({
  declarations: [RequestTypeListComponent, RequestTypeEntryComponent],
  imports: [
    CommonModule,
    RequestTypeRoutingModule,
    SharedComponentModule,
    SharedMaterialModule
  ]
})
export class RequestTypeModule { }
