import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RerouterComponent } from 'app/shared/component/rerouter/rerouter.component';
import { AuthGuard } from 'app/shared/service/authGuard.service';
import { Pes11EntryComponent } from './pes11-entry/pes11-entry.component';
import { Pes11ListComponent } from './pes11-list/pes11-list.component';

const routes: Routes = [
  {
    data:{
      module:'PES11-List'
    },
    canActivate:[AuthGuard],
    path:'list',
    component:Pes11ListComponent
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
      module:'PES11-Entry'
    },
    canActivate:[AuthGuard],
    path:':id',
    component:Pes11EntryComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pes11RoutingModule { }
