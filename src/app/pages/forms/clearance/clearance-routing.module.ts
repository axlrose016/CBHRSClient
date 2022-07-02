import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'app/shared/service/authGuard.service';
import { ClearanceListComponent } from './clearance-list/clearance-list.component';
import { ClearanceEntryComponent } from './clearance-entry/clearance-entry.component';

const routes: Routes = [
  {
    data:{
      module:'Clearance-List'
    },
    canActivate:[AuthGuard],
    path:'list',
    component:ClearanceListComponent,
  },
  {
    data:{
      module:'Clearance-Entry',
    },
    canActivate:[AuthGuard],
    path:':id',
    component:ClearanceEntryComponent,
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClearanceRoutingModule { }
