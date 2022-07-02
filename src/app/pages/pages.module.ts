import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { GlobalVariablesService } from 'app/shared/service/globalVariables.service';
import { LibraryService } from 'app/shared/service/library.service';
import { AuthService } from 'app/shared/service/auth.service';
import { AuthGuard } from 'app/shared/service/authGuard.service';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
  ],
  providers:[AuthGuard, GlobalVariablesService]
})
export class PagesModule {
}
