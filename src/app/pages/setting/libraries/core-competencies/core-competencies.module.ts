import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreCompetenciesRoutingModule } from './core-competencies-routing.module';
import { CoreCompetencyListComponent } from './core-competency-list/core-competency-list.component';
import { CoreCompetencyEntryComponent } from './core-competency-entry/core-competency-entry.component';
import { SharedMaterialModule } from 'app/shared/shared-material/shared-material.module';
import { SharedComponentModule } from 'app/shared/component/shared-component.module';


@NgModule({
  declarations: [CoreCompetencyListComponent, CoreCompetencyEntryComponent],
  imports: [
    CommonModule,
    CoreCompetenciesRoutingModule,
    SharedMaterialModule,
    SharedComponentModule
  ]
})
export class CoreCompetenciesModule { }
