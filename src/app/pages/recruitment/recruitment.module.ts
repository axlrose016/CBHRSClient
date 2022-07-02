import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruitmentRoutingModule } from './recruitment-routing.module';
import { ThemeModule } from 'app/@theme/theme.module';
import { RecruitmentComponent } from './recruitment.component';


@NgModule({
  imports: [
    ThemeModule,
    RecruitmentRoutingModule
  ],
  declarations:[
    RecruitmentComponent,
  ]
})
export class RecruitmentModule { }
