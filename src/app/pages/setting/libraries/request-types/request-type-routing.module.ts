import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestTypeEntryComponent } from './request-type-entry/request-type-entry.component';
import { RequestTypeListComponent } from './request-type-list/request-type-list.component';

const routes: Routes = [
  {
    path:'list',
    component:RequestTypeListComponent,
  },
  {
    path:':id',
    component:RequestTypeEntryComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestTypeRoutingModule { }
