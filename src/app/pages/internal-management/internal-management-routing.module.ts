import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'office-profile',
    loadChildren: () => import('./office-profile/office-profile.module').then(m => m.OfficeProfileModule),
    data:{breadcrumb:'OFFICE-PROFILE'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalManagementRoutingModule { }
