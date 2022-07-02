import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LdnaEntryComponent } from './ldna-entry/ldna-entry.component';
import { LdnaListComponent } from './ldna-list/ldna-list.component';

const routes: Routes = [
  {
    path:'list',
    component:LdnaListComponent,
  },
  {
    path:':id',
    component:LdnaEntryComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LdnaRoutingModule { }
