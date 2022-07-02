import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLevelEntryComponent } from './user-level-entry/user-level-entry.component';
import { UserLevelListComponent } from './user-level-list/user-level-list.component';

const routes: Routes = [
  {
    path:'list',
    component:UserLevelListComponent,
  },
  {
    path:':id',
    component:UserLevelEntryComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLevelsRoutingModule { }
