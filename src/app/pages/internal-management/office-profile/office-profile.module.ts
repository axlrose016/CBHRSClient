import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficeProfileRoutingModule } from './office-profile-routing.module';
import { OfficeProfileListComponent } from './office-profile-list/office-profile-list.component';
import { OfficeProfileEntryComponent } from './office-profile-entry/office-profile-entry.component';


@NgModule({
  declarations: [OfficeProfileListComponent, OfficeProfileEntryComponent],
  imports: [
    CommonModule,
    OfficeProfileRoutingModule
  ]
})
export class OfficeProfileModule { }
