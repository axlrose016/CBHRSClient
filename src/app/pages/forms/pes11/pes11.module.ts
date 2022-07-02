import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pes11RoutingModule } from './pes11-routing.module';
import { Pes11EntryComponent } from './pes11-entry/pes11-entry.component';
import { Pes11ListComponent } from './pes11-list/pes11-list.component';
import { SharedComponentModule } from 'app/shared/component/shared-component.module';
import { SharedMaterialModule } from 'app/shared/shared-material/shared-material.module';


@NgModule({
  declarations: [Pes11EntryComponent, Pes11ListComponent],
  imports: [
    CommonModule,
    Pes11RoutingModule,
    SharedComponentModule,
    SharedMaterialModule
  ]
})
export class Pes11Module { }
