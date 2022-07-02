import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetUtilizationRoutingModule } from './budget-utilization-routing.module';
import { BudgetUtilListComponent } from './budget-util-list/budget-util-list.component';
import { BudgetUtilEntryComponent } from './budget-util-entry/budget-util-entry.component';
import { SharedComponentModule } from 'app/shared/component/shared-component.module';
import { SharedMaterialModule } from 'app/shared/shared-material/shared-material.module';


@NgModule({
  declarations: [BudgetUtilListComponent, BudgetUtilEntryComponent],
  imports: [
    CommonModule,
    BudgetUtilizationRoutingModule,
    SharedComponentModule,
    SharedMaterialModule
  ]
})
export class BudgetUtilizationModule { }
