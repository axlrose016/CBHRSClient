import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lib_department, lib_job_category, lib_region, lib_request_type } from 'app/shared/model/library.model';
import { JobRequisitionDetail } from 'app/shared/model/setting.model';
import { DialogService } from 'app/shared/service/dialog.service';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-job-entry',
  templateUrl: './job-entry.component.html',
  styleUrls: ['./job-entry.component.scss']
})
export class JobEntryComponent implements OnInit {
  public curRecordId: string = null;
  public lib_request_type: lib_request_type[];
  public lib_department: lib_department[];
  public lib_job_category: lib_job_category[];
  public showLoadingProgressBar$: Observable<boolean>;
  public JobRequisitionForm: FormGroup;
  jobRequisitionDetail:JobRequisitionDetail;
  constructor(
    private fb: FormBuilder,
    private frmglobalataserve: FormGlobalDataService,
    private dialogserve: DialogService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showLoadingProgressBar$ = this.frmglobalataserve.getShowLoadingSpinner;
    this.frmglobalataserve.setLoadingProgressBar(true);
    this.initData();
    this.frmglobalataserve.setLoadingProgressBar(false);
  }

  initData(){
    this.lib_request_type = JSON.parse(sessionStorage.getItem('lib_request_type'));
    this.lib_department = JSON.parse(sessionStorage.getItem('lib_department'));
    this.lib_job_category = JSON.parse(sessionStorage.getItem('lib_job_category'));
    this.curRecordId = this.route.snapshot.params['id'];
    if(this.curRecordId != "0"){
      this.getJobRequisition();
    }else{
      this.buildJobRequisitionDetail();
    }
  }

  getJobRequisition(){
    ;
    this.frmglobalataserve.getRecord("Setting/GetJobRequisition/"+this.curRecordId)
      .subscribe((data:JobRequisitionDetail) => {
        this.jobRequisitionDetail = data;
        this.buildJobRequisitionDetail(this.jobRequisitionDetail);
      })
  }

  buildJobRequisitionDetail(jobRequisitionDetail?: JobRequisitionDetail){
    this.JobRequisitionForm = this.fb.group({
      requisitionId:[jobRequisitionDetail?jobRequisitionDetail.requisitionId: Guid.raw],
      requestDate:[jobRequisitionDetail?jobRequisitionDetail.requestDate:''],
      requestTypeId:[jobRequisitionDetail?jobRequisitionDetail.requestTypeId:-1],
      departmentId:[jobRequisitionDetail?jobRequisitionDetail.departmentId:-1],
      locationAddress:[jobRequisitionDetail?jobRequisitionDetail.locationAddress:''],
      jobCategoryId:[jobRequisitionDetail?jobRequisitionDetail.jobCategoryId:-1],
      jobTitle:[jobRequisitionDetail?jobRequisitionDetail.jobTitle:''],
      salary:[jobRequisitionDetail?jobRequisitionDetail.salary:0],
      jobDescription:[jobRequisitionDetail?jobRequisitionDetail.jobDescription:''],	
      qualification:[jobRequisitionDetail?jobRequisitionDetail.qualification:''],	
      isOpen:[jobRequisitionDetail?jobRequisitionDetail.isOpen:false],	
      isApproved:[jobRequisitionDetail?jobRequisitionDetail.isApproved:false],	
      closingDate:[jobRequisitionDetail?jobRequisitionDetail.closingDate:''],
      deleted_by:[jobRequisitionDetail?jobRequisitionDetail.deleted_by:''],
      deleted_date:[jobRequisitionDetail?jobRequisitionDetail.deleted_date:null],
      is_deleted:[jobRequisitionDetail?jobRequisitionDetail.is_deleted:false]
    });
  }

  eventHandler(btnclick:string){
    if(btnclick == "Save"){
      if(this.JobRequisitionForm.valid)
        this.saveRecord();
    }else if(btnclick == "Delete"){
        this.dialogserve.openConfirmation("Are you sure want to delete this record?")
          .afterClosed().subscribe(result => {
            if(result == true){
              this.JobRequisitionForm.patchValue({'is_deleted':true,'deleted_by':'Axl','deleted_date':this.formatDate(new Date())});
              this.deletedRecord();
            }
          });
    }
  }

  saveRecord(){
    this.frmglobalataserve.updateRecord(this.JobRequisitionForm.value,"Setting/PostJobRequisition")
      .subscribe(
        (response) =>
        {
          console.log("Record Saved Successfully: "+response);
          this.router.navigateByUrl("pages/recruitment/jobs/"+response).then(x => {
            this.initData();
            this.frmglobalataserve.openSnackBar();
          },(error) => {
            console.log("Error Saving the Record: "+JSON.stringify(this.JobRequisitionForm.value));
          })
        }
      );
  }

  deletedRecord(){
    this.frmglobalataserve.updateRecord(this.JobRequisitionForm.value,"Setting/PostJobRequisition")
      .subscribe(
        (response) =>{
          console.log("Record Deleted Successfully: "+response);
          this.router.navigateByUrl("pages/recruitment/jobs/list");
        },(error) =>{
          console.log("Error Deleting the Record: "+ JSON.stringify(this.JobRequisitionForm.value));
        }
      )
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
