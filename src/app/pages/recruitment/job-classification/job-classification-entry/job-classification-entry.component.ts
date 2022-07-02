import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobClassificationDetail } from 'app/shared/model/recruitement.model';
import { DialogService } from 'app/shared/service/dialog.service';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-job-classification-entry',
  templateUrl: './job-classification-entry.component.html',
  styleUrls: ['./job-classification-entry.component.scss']
})
export class JobClassificationEntryComponent implements OnInit {

  public JobClassForm: FormGroup;
  public showLoadingProgressBar$: Observable<boolean>;
  public curRecordId: string = null;
  jobClassDetail: JobClassificationDetail;
  constructor(
    private dialogserve: DialogService,
    private frmglobaldataserve: FormGlobalDataService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.showLoadingProgressBar$ = this.frmglobaldataserve.getShowLoadingSpinner;
    this.frmglobaldataserve.setLoadingProgressBar(true);
    this.initData();
    this.frmglobaldataserve.setLoadingProgressBar(false);
  }

  initData(){
    this.curRecordId = this.route.snapshot.params['id'];
    if(this.curRecordId != "0"){
      this.getJobClass();
    }else{
      this.buildJobClassDetail();
    }
  }

  getJobClass(){
    this.frmglobaldataserve.getRecord("Setting/GetJobClassification/"+this.curRecordId)
      .subscribe((data: JobClassificationDetail) =>{
        this.jobClassDetail = data;
        this.buildJobClassDetail(this.jobClassDetail);
      });
  }

  buildJobClassDetail(jobClassDetail?: JobClassificationDetail){
    debugger;
    this.JobClassForm = this.fb.group({
      jobClassificationId:[jobClassDetail? jobClassDetail.jobClassificationId: Guid.raw],
      occupationalServCode:[jobClassDetail? jobClassDetail.occupationalServCode: 0],
      numerical_suffix:[jobClassDetail? jobClassDetail.numerical_suffix:0],
      duties_and_responsibilities:[jobClassDetail? jobClassDetail.duties_and_responsibilities:''],
      salary_grade:[jobClassDetail? jobClassDetail.salary_grade:0],
      is_active:[jobClassDetail? jobClassDetail.is_active:false],
    })
  }

  eventHandler(btnclick:string){
    if(btnclick == "Save"){
      if(this.JobClassForm.valid)
        this.saveRecord();
    }else if(btnclick == "Delete")
      this.dialogserve.openConfirmation("Are you sure you want to delete this record?")
        .afterClosed().subscribe(result => {
          if(result == true){
            this.JobClassForm.patchValue({'is_deleted':true,'deleted_by':localStorage.getItem('secN'),'deleted_date':this.frmglobaldataserve.formatDate(new Date())});
            this.deleteRecord();
          }
        })
  }

  saveRecord(){
    this.frmglobaldataserve.updateRecord(this.JobClassForm.value,"Setting/PostJobClassification")
      .subscribe(
        (response) =>
        {
          console.log("Record Saved Successfully: "+response);
          this.router.navigateByUrl("pages/recruitment/job-classification/"+response).then(x => {
            this.initData(),
            this.frmglobaldataserve.openSnackBar();
          },(error) =>
          {
            console.log("Error Saving the record: "+ JSON.stringify(this.JobClassForm.value));
          })
        }
      )
  }

  deleteRecord(){
    this.frmglobaldataserve.updateRecord(this.JobClassForm.value,"Setting/PostJobClassification")
      .subscribe(
        (response) => {
          console.log("Record Deleted Successfully: " + response);
          this.router.navigateByUrl("pages/recruitment/job-classification/list");
        },(error) => {
          console.log("Error Deleting the Record: "+ JSON.stringify(this.JobClassForm.value));
        }
      )
  }

}
