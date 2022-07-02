import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';
import { ThemeModule } from 'app/@theme/theme.module';


@NgModule({
  declarations: [SettingComponent],
  imports: [
    ThemeModule,
    SettingRoutingModule,
  ]
})
export class SettingModule { }
