import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RerouterComponent } from 'app/shared/component/rerouter/rerouter.component';
import { AuthService } from 'app/shared/service/auth.service';
import { AuthGuard } from 'app/shared/service/authGuard.service';
import { PdsEntryComponent } from './pds-entry/pds-entry.component';
import { PdsListComponent } from './pds-list/pds-list.component';

const routes: Routes = [
  {
    data:{
      module:'PDS-List'
    },
    canActivate:[AuthGuard],
    path:'list',
    component:PdsListComponent,
  },
  {
    data:{
      module:'*'
    },
    canActivate:[AuthGuard],
    path:'reroute',
    component:RerouterComponent
  },
  {
    data:{
      module:'PDS-Entry'
    },
    canActivate:[AuthGuard],
    path:':id',
    component:PdsEntryComponent,
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdsRoutingModule { }
