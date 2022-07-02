import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnderConstructionComponent } from 'app/pages/miscellaneous/under-construction/under-construction.component';
import { OfficeProfileEntryComponent } from './office-profile-entry/office-profile-entry.component';
import { OfficeProfileListComponent } from './office-profile-list/office-profile-list.component';

const routes: Routes = [
  {
    path:'list',
    component:UnderConstructionComponent
  },
  {
    path:':id',
    component:OfficeProfileEntryComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficeProfileRoutingModule { }
