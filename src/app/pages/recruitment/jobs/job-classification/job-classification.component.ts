import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {  JobClassificationList_vw } from 'app/shared/model/recruitement.model';
import { DialogService } from 'app/shared/service/dialog.service';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { stringify } from 'querystring';

@Component({
  selector: 'ngx-job-classification',
  templateUrl: './job-classification.component.html',
  styleUrls: ['./job-classification.component.scss']
})
export class JobClassificationComponent implements OnInit {

  public JobClassificationForm: FormGroup;
  public jobClassificationFG: FormGroup;
  public selectedJobClassificationRecord: number;
  jobClassDetail: JobClassificationList_vw[];
  constructor(
    private fb: FormBuilder,
    private frmglobaldataserve: FormGlobalDataService,
    private dialogserve: DialogService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    debugger;
    this.frmglobaldataserve.getRecord("Setting/GetJobClassificationList/")
      .subscribe((data: JobClassificationList_vw[]) => {
        this.jobClassDetail = data;
        this.buildJobClassificationList(this.jobClassDetail);
      });
  }

  buildJobClassificationList(jobClassification?: JobClassificationList_vw[]){
    this.JobClassificationForm = this.fb.group({
      jobClassificationList: this.fb.array([])
    });

    // this.jobClassDetail.forEach(i => {
    //   this.createJobClassification(i,false);
    // })
  }

  // createJobClassification(jobClassification: JobClassificationList_vw, isTriggered: boolean){
  //   this.jobClassificationFG = this.fb.group({
  //     jobClassificationId:[jobClassDetail? jobClassDetail.jobClassificationId: Guid.raw],
  //     occupationalServCode:[jobClassDetail? jobClassDetail.occupationalServCode: ''],
  //     numerical_suffix:[jobClassDetail? jobClassDetail.numerical_suffix:0],
  //     duties_and_responsibilities:[jobClassDetail? jobClassDetail.duties_and_responsibilities:''],
  //     salary_grade:[jobClassDetail? jobClassDetail.salary_grade:0],
  //     is_active:[jobClassDetail? jobClassDetail.is_active:false],
  //   });
  //   if(isTriggered){this.selectedJobClassificationRecord = this.jobClassificationFormArray.length;}
  //   this.jobClassificationFormArray.push(this.jobClassificationFG);
  // }khjk

  get jobClassificationFormArray(): FormArray{
    return this.JobClassificationForm.get('jobClassificationList') as FormArray;
  }

  editTableRecord(table:string, selectedIndex:number){
    switch(table){
      case "classification":
        this.selectedJobClassificationRecord = selectedIndex;
        break;
      default:
        break;
    }
  }
}
