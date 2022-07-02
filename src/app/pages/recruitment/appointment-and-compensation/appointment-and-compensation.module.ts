import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentAndCompensationRoutingModule } from './appointment-and-compensation-routing.module';
import { AppointmentAndCompensationListComponent } from './appointment-and-compensation-list/appointment-and-compensation-list.component';
import { AppointmentAndCompensationEntryComponent } from './appointment-and-compensation-entry/appointment-and-compensation-entry.component';


@NgModule({
  declarations: [AppointmentAndCompensationListComponent, AppointmentAndCompensationEntryComponent],
  imports: [
    CommonModule,
    AppointmentAndCompensationRoutingModule
  ]
})
export class AppointmentAndCompensationModule { }
