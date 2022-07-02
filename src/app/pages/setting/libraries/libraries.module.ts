import { NgModule } from '@angular/core';

import { LibrariesRoutingModule } from './libraries-routing.module';
import { ThemeModule } from 'app/@theme/theme.module';
import { LibrariesComponent } from './libraries.component';


@NgModule({
  declarations: [LibrariesComponent],
  imports: [
    ThemeModule,
    LibrariesRoutingModule
  ],
})
export class LibrariesModule { }
