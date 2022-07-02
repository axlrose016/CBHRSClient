import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLevelsRoutingModule } from './user-levels-routing.module';
import { UserLevelListComponent } from './user-level-list/user-level-list.component';
import { UserLevelEntryComponent } from './user-level-entry/user-level-entry.component';
import { SharedComponentModule } from 'app/shared/component/shared-component.module';
import { SharedMaterialModule } from 'app/shared/shared-material/shared-material.module';


@NgModule({
  declarations: [UserLevelListComponent, UserLevelEntryComponent],
  imports: [
    CommonModule,
    UserLevelsRoutingModule,
    SharedComponentModule,
    SharedMaterialModule
  ]
})
export class UserLevelsModule { }
