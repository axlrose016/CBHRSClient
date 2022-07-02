import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdsRoutingModule } from './pds-routing.module';
import { PdsListComponent } from './pds-list/pds-list.component';
import { PdsEntryComponent } from './pds-entry/pds-entry.component';
import { SharedComponentModule } from 'app/shared/component/shared-component.module';
import { SharedMaterialModule } from 'app/shared/shared-material/shared-material.module';


@NgModule({
  declarations: [PdsListComponent, PdsEntryComponent],
  imports: [
    CommonModule,
    PdsRoutingModule,
    SharedComponentModule,
    SharedMaterialModule
  ],
})
export class PdsModule { }
