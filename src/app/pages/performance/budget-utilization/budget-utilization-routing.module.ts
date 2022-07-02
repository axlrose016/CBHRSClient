import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetUtilEntryComponent } from './budget-util-entry/budget-util-entry.component';
import { BudgetUtilListComponent } from './budget-util-list/budget-util-list.component';

const routes: Routes = [
  {
    path:'list',
    component:BudgetUtilListComponent
  },
  {
    path:':id',
    component:BudgetUtilEntryComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetUtilizationRoutingModule { }
