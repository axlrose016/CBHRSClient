import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from 'app/pages/miscellaneous/not-found/not-found.component';
import { UnderConstructionComponent } from 'app/pages/miscellaneous/under-construction/under-construction.component';
import { AppointmentAndCompensationEntryComponent } from './appointment-and-compensation-entry/appointment-and-compensation-entry.component';
import { AppointmentAndCompensationListComponent } from './appointment-and-compensation-list/appointment-and-compensation-list.component';

const routes: Routes = [
  {
    path:'list',
    component:UnderConstructionComponent
  },
  {
    path:':id',
    component:AppointmentAndCompensationEntryComponent,
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentAndCompensationRoutingModule { }
