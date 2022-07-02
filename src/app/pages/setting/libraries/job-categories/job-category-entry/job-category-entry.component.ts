import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lib_job_category } from 'app/shared/model/library.model';
import { DialogService } from 'app/shared/service/dialog.service';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-job-category-entry',
  templateUrl: './job-category-entry.component.html',
  styleUrls: ['./job-category-entry.component.scss']
})
export class JobCategoryEntryComponent implements OnInit {
  public JobCategoryForm: FormGroup;
  public lib_request_types: lib_job_category[];
  public showLoadingProgressBar$: Observable<boolean>;
  public baseUrl = environment.apiUrl+"Library/";
  public curRecordId: number = 0;
  jobCategoryDetail: lib_job_category;
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
      this.requestType();
    }else{
      this.buildRequestTypeDetail();
    }
  }

  requestType(){
    this.frmglobaldataserve.getRecord("Library/GetJobCategory?id="+this.curRecordId)
      .subscribe((data:lib_job_category) => {
        this.jobCategoryDetail = data;
        ;
        this.buildRequestTypeDetail(this.jobCategoryDetail);
      })
  }

  buildRequestTypeDetail(jobCategoryDetail?: lib_job_category){
    this.JobCategoryForm = this.fb.group({
      jobCategoryId:[jobCategoryDetail?jobCategoryDetail.jobCategoryId:0],
      description:[jobCategoryDetail?jobCategoryDetail.description:''],
      is_active:[jobCategoryDetail?jobCategoryDetail.is_active:true]
    });
  }

  eventHandler(btnclick:string){
    if(btnclick == "Save"){
      if(this.JobCategoryForm.valid)
        this.saveRecord();
    }else if(btnclick == "Delete"){
      this.dialogserve.openConfirmation("Are you sure you want to delete this record?")
        .afterClosed().subscribe(result => {
          if(result == true){
            this.JobCategoryForm.patchValue({'is_deleted':true,'deleted_by':'Axl','deleted_date':this.formatDate(new Date())});
            this.deleteRecord();
          }
        });
    }
  }

  deleteRecord(){
    this.frmglobaldataserve.updateRecord(this.JobCategoryForm.value,"Library/PostJobCategory")
      .subscribe(
          (response) => {
            console.log("Record Deleted Successfully: "+ response);
            this.router.navigateByUrl("pages/settings/libraries/job-categories/list");
          },(error) => {
            console.log("Error Deleting the Record: "+JSON.stringify(this.JobCategoryForm.value));
          }
      )
  }

  saveRecord(){
    this.frmglobaldataserve.updateRecord(this.JobCategoryForm.value,"Library/PostJobCategory")
      .subscribe(
          (response) => {
            this.router.navigateByUrl("pages/settings/libraries/job-categories/"+response).then(x => {
              this.initData(),
              this.frmglobaldataserve.openSnackBar();
            },(error) =>{
              console.log("Error saving the Record: "+ JSON.stringify(this.JobCategoryForm.value));
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
