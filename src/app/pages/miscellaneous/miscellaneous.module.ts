import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule } from '@nebular/theme';
import { SharedMaterialModule } from 'app/shared/shared-material/shared-material.module';

import { ThemeModule } from '../../@theme/theme.module';
import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';
import { MiscellaneousComponent } from './miscellaneous.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    MiscellaneousRoutingModule,
    SharedMaterialModule
  ],
  declarations: [
    MiscellaneousComponent,
    NotFoundComponent,
    UnderConstructionComponent,
  ],
})
export class MiscellaneousModule { }
