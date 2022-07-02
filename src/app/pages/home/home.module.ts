import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { SharedMaterialModule } from 'app/shared/shared-material/shared-material.module';
import { SharedComponentModule } from 'app/shared/component/shared-component.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartsComponent } from '../charts/charts.component';
import { ChartsModule } from '../charts/charts.module';


@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedComponentModule,
    SharedMaterialModule,
    ChartsModule
  ]
})
export class HomeModule { }
