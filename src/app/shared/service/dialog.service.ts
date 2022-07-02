import { Inject, Injectable } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreCompetencyListComponent } from 'app/pages/setting/libraries/core-competencies/core-competency-list/core-competency-list.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { CompetencyCategoryDialogComponent } from '../component/dialog/competency-category-dialog/competency-category-dialog.component';
import { CoreCompetencyDialogComponent } from '../component/dialog/core-competency-dialog/core-competency-dialog.component';
import { PersonlistDialogComponent } from '../component/dialog/personlist-dialog/personlist-dialog.component';
import { TransactionDialogComponent } from '../component/dialog/transaction-dialog/transaction-dialog.component';
import { lib_competency_category, lib_core_competency } from '../model/library.model';
import { PersonPDSDetail } from '../model/PersonPDS.model';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  public doCheckController$ = new BehaviorSubject<boolean>(false);
  public selectedPDS$: Observable<PersonPDSDetail>;
  public selectedPDSOther$: Observable<PersonPDSDetail>;
  public selectedCompetencyCategory$: Observable<lib_competency_category>;
  public selectedCoreCompetency$: Observable<lib_core_competency>;
  constructor(private dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data) { 
    }

  openConfirmation(msg){
    return this.dialog.open(TransactionDialogComponent,{
      width:'600px',
      disableClose:true,
      data:{
        message: msg 
      }
    })
  }

  openFormDialog(vwstr:string,is_with_other_selection?:boolean): Observable<any>{
    switch(vwstr) 
    {       
        case "PersonProfile":
        {
            const dialogRef = this.dialog.open(PersonlistDialogComponent,{
                width: '1000px',
                data: { personPDS: this.selectedPDS$ }
            });   
            
            dialogRef.afterClosed().subscribe(result => {
              if(!is_with_other_selection)
                this.selectedPDS$ = result;
              else
                this.selectedPDSOther$ = result;
            });

            break; 
        }
        case "CompetencyCategory":
        {
            const dialogRef = this.dialog.open(CompetencyCategoryDialogComponent, {
              width: '500px',
              data: { competencyCategory: this.selectedCompetencyCategory$ }
            });  

            dialogRef.afterClosed().subscribe(result => {
              ;
              this.selectedCompetencyCategory$ = result;
              this.setDoCheckController(true);
            });
            break;
        }
        case "CoreCompetency":
        {
          const dialogRef = this.dialog.open(CoreCompetencyDialogComponent,{
            width:'500px',
            data:{ coreCompetency: this.selectedCoreCompetency$}
          });
          dialogRef.afterClosed().subscribe(result =>{
            ;
            this.selectedCoreCompetency$ = result;
            this.setDoCheckController(true);
          });
          break;
        }
        default:
        {
            break;
        }    
    }
    return this.selectedPDS$, this.selectedCompetencyCategory$, this.selectedCoreCompetency$;
}

setDoCheckController(doCheck:boolean){
  this.doCheckController$.next(doCheck);
}
}
