import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserEntryComponent } from './user-entry/user-entry.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path:'list',
    component:UserListComponent,
  },
  {
    path:':id',
    component:UserEntryComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
