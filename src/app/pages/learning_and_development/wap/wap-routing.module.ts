import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WapEntryComponent } from './wap-entry/wap-entry.component';
import { WapListComponent } from './wap-list/wap-list.component';

const routes: Routes = [
  {
    path:'list',
    component:WapListComponent,
  },
  {
    path:':id',
    component:WapEntryComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WapRoutingModule { }
