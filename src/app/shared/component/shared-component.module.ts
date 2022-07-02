import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCrudComponent } from './app-crud/app-crud.component';
import { AppListComponent } from './app-list/app-list.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { TransactionDialogComponent } from './dialog/transaction-dialog/transaction-dialog.component';
import { FormGlobalDataService } from '../service/formGlobalData.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppLoaderComponent } from './app-loader/app-loader.component';
import { DialogService } from '../service/dialog.service';
import { LibraryService } from '../service/library.service';
import { RerouterComponent } from './rerouter/rerouter.component';
import { PersonlistDialogComponent } from './dialog/personlist-dialog/personlist-dialog.component';
import { CompetencyCategoryDialogComponent } from './dialog/competency-category-dialog/competency-category-dialog.component';
import { CoreCompetencyDialogComponent } from './dialog/core-competency-dialog/core-competency-dialog.component';

@NgModule({
  declarations: [AppListComponent,AppCrudComponent, TransactionDialogComponent, AppLoaderComponent, RerouterComponent, PersonlistDialogComponent, CompetencyCategoryDialogComponent, CoreCompetencyDialogComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
  ],
  exports:[
    AppListComponent,
    AppCrudComponent,
    TransactionDialogComponent,
    AppLoaderComponent,
    RerouterComponent,
    SharedMaterialModule
  ],
  providers:[FormGlobalDataService, DialogService,
  {provide: MAT_DIALOG_DATA, useValue: {}}]
})
export class SharedComponentModule { }
