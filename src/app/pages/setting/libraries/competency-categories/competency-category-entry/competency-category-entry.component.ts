import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lib_competency_category } from 'app/shared/model/library.model';
import { DialogService } from 'app/shared/service/dialog.service';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-competency-category-entry',
  templateUrl: './competency-category-entry.component.html',
  styleUrls: ['./competency-category-entry.component.scss']
})
export class CompetencyCategoryEntryComponent implements OnInit {
  public CompetencyCategoryForm: FormGroup;
  public lib_competency_categories: lib_competency_category[];
  public showLoadingProgressBar$: Observable<boolean>;
  public baseUrl = environment.apiUrl+"Library/";
  public curRecordId: number = 0;
  competencyCategoryDetail: lib_competency_category;
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
      this.competencyCategory();
    }else{
      this.buildCompetencyCategoryDetail();
    }
  }

  competencyCategory(){
    this.frmglobaldataserve.getRecord("Library/GetCompetencyCategory?id="+this.curRecordId)
      .subscribe((data:lib_competency_category) => {
        this.competencyCategoryDetail = data;
        ;
        this.buildCompetencyCategoryDetail(this.competencyCategoryDetail);
      })
  }

  buildCompetencyCategoryDetail(competencyCategoryDetail?: lib_competency_category){
    this.CompetencyCategoryForm = this.fb.group({
      competencyId:[competencyCategoryDetail?competencyCategoryDetail.competencyId:0],
      description:[competencyCategoryDetail?competencyCategoryDetail.description:''],
      is_active:[competencyCategoryDetail?competencyCategoryDetail.is_active:true],

    });
  }

  eventHandler(btnclick:string){
    if(btnclick == "Save"){
      if(this.CompetencyCategoryForm.valid)
        this.saveRecord();
    }else if(btnclick == "Delete"){
      this.dialogserve.openConfirmation("Are you sure you want to delete this record?")
        .afterClosed().subscribe(result => {
          if(result == true){
            this.CompetencyCategoryForm.patchValue({'is_deleted':true,'deleted_by':'Axl','deleted_date':this.formatDate(new Date())});
            this.deleteRecord();
          }
        });
    }
  }

  deleteRecord(){
    this.frmglobaldataserve.updateRecord(this.CompetencyCategoryForm.value,"Library/PostCompetencyCategory")
      .subscribe(
          (response) => {
            console.log("Record Deleted Successfully: "+ response);
            this.router.navigateByUrl("pages/settings/libraries/competency-categories/list");
          },(error) => {
            console.log("Error Deleting the Record: "+JSON.stringify(this.CompetencyCategoryForm.value));
          }
      )
  }

  saveRecord(){
    this.frmglobaldataserve.updateRecord(this.CompetencyCategoryForm.value,"Library/PostCompetencyCategory")
      .subscribe(
          (response) => {
            this.router.navigateByUrl("pages/settings/libraries/competency-categories/"+response).then(x => {
              this.initData(),
              this.frmglobaldataserve.openSnackBar();
            },(error) =>{
              console.log("Error saving the Record: "+ JSON.stringify(this.CompetencyCategoryForm.value));
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
}
