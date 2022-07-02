import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningAndDevelopmentRoutingModule } from './learning-and-development-routing.module';
import { LearningAndDevelopmentComponent } from './learning-and-development.component';


@NgModule({
  imports: [
    CommonModule,
    LearningAndDevelopmentRoutingModule
  ],
  declarations:[
    LearningAndDevelopmentComponent,
  ]
})
export class LearningAndDevelopmentModule { }
