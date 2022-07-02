import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationalGoalRoutingModule } from './organizational-goal-routing.module';
import { OrganizationalGoalListComponent } from './organizational-goal-list/organizational-goal-list.component';
import { SharedMaterialModule } from 'app/shared/shared-material/shared-material.module';
import { SharedComponentModule } from 'app/shared/component/shared-component.module';
import { OrganizationalGoalEntryComponent } from './organizational-goal-entry/organizational-goal-entry.component';


@NgModule({
  declarations: [OrganizationalGoalListComponent, OrganizationalGoalEntryComponent],
  imports: [
    CommonModule,
    OrganizationalGoalRoutingModule,
    SharedComponentModule,
    SharedMaterialModule
  ]
})
export class OrganizationalGoalModule { }
