import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizationalGoalEntryComponent } from './organizational-goal-entry/organizational-goal-entry.component';
import { OrganizationalGoalListComponent } from './organizational-goal-list/organizational-goal-list.component';

const routes: Routes = [
  {
    path:'list',
    component:OrganizationalGoalListComponent
  },
  {
    path:':id',
    component:OrganizationalGoalEntryComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationalGoalRoutingModule { }
