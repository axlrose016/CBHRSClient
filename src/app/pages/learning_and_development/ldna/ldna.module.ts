import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LdnaRoutingModule } from './ldna-routing.module';
import { LdnaListComponent } from './ldna-list/ldna-list.component';
import { LdnaEntryComponent } from './ldna-entry/ldna-entry.component';
import { SharedComponentModule } from 'app/shared/component/shared-component.module';
import { SharedMaterialModule } from 'app/shared/shared-material/shared-material.module';


@NgModule({
  declarations: [LdnaListComponent, LdnaEntryComponent],
  imports: [
    CommonModule,
    LdnaRoutingModule,
    SharedComponentModule,
    SharedMaterialModule
  ]
})
export class LdnaModule { }
