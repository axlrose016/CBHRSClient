import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'users',
    loadChildren:() => import('./users/users.module').then(m => m.UsersModule),
    data:{breadcrumb:'USERS'}
  },
  {
    path:'libraries',
    loadChildren:() => import('./libraries/libraries.module').then(m => m.LibrariesModule),
    data:{breadcrumb:'LIBRARIES'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
