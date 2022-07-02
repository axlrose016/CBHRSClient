import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserEntryComponent } from './user-entry/user-entry.component';
import { SharedMaterialModule } from 'app/shared/shared-material/shared-material.module';
import { SharedComponentModule } from 'app/shared/component/shared-component.module';


@NgModule({
  declarations: [UserListComponent, UserEntryComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedComponentModule,
    SharedMaterialModule
  ]
})
export class UsersModule { }
