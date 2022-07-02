import { NgModule } from '@angular/core';
import { SharedComponentModule } from 'app/shared/component/shared-component.module';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';

@NgModule({
  imports: [
    ThemeModule,
    FormsRoutingModule,
  ],
  declarations: [
    FormsComponent,
  ],
})
export class FormsModule { }
