import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WapRoutingModule } from './wap-routing.module';
import { WapListComponent } from './wap-list/wap-list.component';
import { WapEntryComponent } from './wap-entry/wap-entry.component';
import { SharedComponentModule } from 'app/shared/component/shared-component.module';
import { SharedMaterialModule } from 'app/shared/shared-material/shared-material.module';


@NgModule({
  declarations: [WapListComponent, WapEntryComponent],
  imports: [
    CommonModule,
    WapRoutingModule,
    SharedComponentModule,
    SharedMaterialModule
  ]
})
export class WapModule { }
