import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lib_competency_category, lib_core_competency } from 'app/shared/model/library.model';
import { DialogService } from 'app/shared/service/dialog.service';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-core-competency-entry',
  templateUrl: './core-competency-entry.component.html',
  styleUrls: ['./core-competency-entry.component.scss']
})
export class CoreCompetencyEntryComponent implements OnInit {

  public CoreCompetencyForm: FormGroup;
  public showLoadingProgressBar$: Observable<boolean>;
  public baseUrl = environment.apiUrl+"Library/";
  public curRecordId: number = 0;
  public selectedCompetency: number;
  lib_core_competency: lib_core_competency = {
    libCompetencyCategory:[]
  };
  constructor(
    private fb: FormBuilder,
    private frmglobaldataserve:FormGlobalDataService,
    private dialogserve:DialogService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showLoadingProgressBar$ = this.frmglobaldataserve.getShowLoadingSpinner;
    this.frmglobaldataserve.setLoadingProgressBar(true);
    this.initData();
    this.frmglobaldataserve.setLoadingProgressBar(false);
  }

  initData(){
    this.curRecordId = +this.route.snapshot.params['id'];
    if(this.curRecordId != 0){
      this.coreCompetency();
    }else{
      this.buildCoreCompetencyDetail();
    }
  }

  coreCompetency(){
    this.frmglobaldataserve.getRecord("Library/GetCoreCompetency?id="+this.curRecordId)
      .subscribe((data:lib_core_competency) => {
        this.lib_core_competency = data;
        ;
        this.buildCoreCompetencyDetail(this.lib_core_competency);
      })
  }

  buildCoreCompetencyDetail(coreCompetencyDetail?: lib_core_competency){
    this.CoreCompetencyForm = this.fb.group({
      coreCompetencyId:[coreCompetencyDetail?coreCompetencyDetail.coreCompetencyId:0],
      description:[coreCompetencyDetail?coreCompetencyDetail.description:''],
      is_active:[coreCompetencyDetail?coreCompetencyDetail.is_active:true],
      libCompetencyCategory: this.fb.array([])
    });
    if(this.lib_core_competency.libCompetencyCategory != undefined){
      this.lib_core_competency.libCompetencyCategory.forEach(i => {
        this.createLibCompetencyFormGroup(i, false);
    });
    }
  }

  createLibCompetencyFormGroup(lib_Competency_Category: lib_competency_category, isTriggered:boolean){
    let lib_Competency_CategoryFG: FormGroup = this.fb.group({
      competencyId:[lib_Competency_Category? lib_Competency_Category.competencyId:0],
      description:[lib_Competency_Category? lib_Competency_Category.description:''],
    });
    if(isTriggered){this.selectedCompetency = this.libCompetencyCategoryFormArray.length;}
    this.libCompetencyCategoryFormArray.push(lib_Competency_CategoryFG);
  }

  get libCompetencyCategoryFormArray(): FormArray{
    return this.CoreCompetencyForm.get("libCompetencyCategory") as FormArray;
  }

  eventHandler(btnclick:string){
    if(btnclick == "Save"){
      if(this.CoreCompetencyForm.valid)
        this.saveRecord();
    }else if(btnclick == "Delete"){
      this.dialogserve.openConfirmation("Are you sure you want to delete this record?")
        .afterClosed().subscribe(result => {
          if(result == true){
            this.CoreCompetencyForm.patchValue({'is_deleted':true,'deleted_by':'Axl','deleted_date':this.formatDate(new Date())});
            this.deleteRecord();
          }
        });
    }
  }

  deleteRecord(){
    this.frmglobaldataserve.updateRecord(this.CoreCompetencyForm.value,"Library/PostCoreCompetency")
      .subscribe(
          (response) => {
            console.log("Record Deleted Successfully: "+ response);
            this.router.navigateByUrl("pages/settings/libraries/core-competencies/list");
          },(error) => {
            console.log("Error Deleting the Record: "+JSON.stringify(this.CoreCompetencyForm.value));
          }
      )
  }

  saveRecord(){
    this.frmglobaldataserve.updateRecord(this.CoreCompetencyForm.value,"Library/PostCoreCompetency")
      .subscribe(
          (response) => {
            this.router.navigateByUrl("pages/settings/libraries/core-competencies/"+response).then(x => {
              this.initData(),
              this.frmglobaldataserve.openSnackBar();
            },(error) =>{
              console.log("Error saving the Record: "+ JSON.stringify(this.CoreCompetencyForm.value));
            })
          }
      );
  }

  private formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
  
  openCompetencyDialog(){
    this.dialogserve.openFormDialog('CompetencyCategory');
  }

  ngDoCheck(){
  if(this.dialogserve.selectedCompetencyCategory$ != undefined && this.dialogserve.doCheckController$.value == true){
        this.createLibCompetencyFormGroup(<lib_competency_category>this.dialogserve.selectedCompetencyCategory$,false);
        this.dialogserve.setDoCheckController(false);
      };
  }

  ngOnDestroy(){
    this.CoreCompetencyForm.reset();
    this.dialogserve.selectedCompetencyCategory$ = null;
  }
}
