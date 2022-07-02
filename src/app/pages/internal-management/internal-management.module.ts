import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalManagementRoutingModule } from './internal-management-routing.module';
import { InternalManagementComponent } from './internal-management.component';


@NgModule({
  declarations: [InternalManagementComponent],
  imports: [
    CommonModule,
    InternalManagementRoutingModule
  ]
})
export class InternalManagementModule { }
