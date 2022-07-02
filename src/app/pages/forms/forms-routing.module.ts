import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsComponent } from './forms.component';
import { PdsListComponent } from './pds/pds-list/pds-list.component';
import { PdsEntryComponent } from './pds/pds-entry/pds-entry.component';

const routes: Routes = [
  {
    path:'pds',
    loadChildren:()=> import('./pds/pds.module').then(m => m.PdsModule),
    data:{breadcrumb:'PDS'}
  },
  {
    path:'clearance',
    loadChildren:()=> import('./clearance/clearance.module').then(m => m.ClearanceModule),
    data:{breadcrumb:'CLEARANCE'}
  },
  {
    path:'pes11',
    loadChildren:()=> import('./pes11/pes11.module').then(m => m.Pes11Module),
    data:{breadcrumb:'PES11'}
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormsRoutingModule {
}

