import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HRStaffingPlanDetail } from 'app/shared/model/performance.model';
import { DialogService } from 'app/shared/service/dialog.service';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-hr-staffing-plan-entry',
  templateUrl: './hr-staffing-plan-entry.component.html',
  styleUrls: ['./hr-staffing-plan-entry.component.scss']
})
export class HrStaffingPlanEntryComponent implements OnInit {

  public HRStaffingForm: FormGroup;
  public showLoadingProgressBar$: Observable<boolean>;
  public curRecordId: string = null;
  hrStaffingPlanDetail: HRStaffingPlanDetail;

  constructor(
    private dialogserve: DialogService,
    private frmglobaldataserve: FormGlobalDataService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.showLoadingProgressBar$ = this.frmglobaldataserve.getShowLoadingSpinner;
    this.frmglobaldataserve.setLoadingProgressBar(true);
    this.initData();
    this.frmglobaldataserve.setLoadingProgressBar(false);
  }

  initData(){
    this.curRecordId = this.route.snapshot.params['id'];
    if(this.curRecordId  != "0"){
      this.getHRStaffingPlan();
    }else{
      this.buildHRStaffingPlanDetail();
    }
  }

  getHRStaffingPlan(){
    this.frmglobaldataserve.getRecord("PerformanceMgnt/GetHRStaffing/"+this.curRecordId)
    .subscribe((data: HRStaffingPlanDetail) => {
      this.hrStaffingPlanDetail = data;
      this.buildHRStaffingPlanDetail(this.hrStaffingPlanDetail);
    });
  }

  buildHRStaffingPlanDetail(hrStaffingPlanDetail?: HRStaffingPlanDetail){
    this.HRStaffingForm = this.fb.group({
      hrStaffingPlanId:[hrStaffingPlanDetail? hrStaffingPlanDetail.hrStaffingId: Guid.raw],
      existingNosPersonnelJO:[hrStaffingPlanDetail? hrStaffingPlanDetail.existingNosPersonnelJO: 0],
      existingNosPersonnelPlantil:[hrStaffingPlanDetail? hrStaffingPlanDetail.existingNosPersonnelPlantil:0],
      nosFilledPosJO:[hrStaffingPlanDetail? hrStaffingPlanDetail.nosFilledPosJO:0],
      nosFilledPosPlantil:[hrStaffingPlanDetail? hrStaffingPlanDetail.nosUnfilledPosPlantil:0],
      nosUnfilledPosJO:[hrStaffingPlanDetail? hrStaffingPlanDetail.nosUnfilledPosJO:0],
      nosUnfilledPosPlantil:[hrStaffingPlanDetail? hrStaffingPlanDetail.nosUnfilledPosPlantil:0],
      nosProposedPosToChangeJO:[hrStaffingPlanDetail? hrStaffingPlanDetail.nosProposedPosToChangeJO:0],
      nosProposedPosToChangePlantil:[hrStaffingPlanDetail? hrStaffingPlanDetail.nosProposedPosToChangePlantil:0],
      proposedNosPersonnelNextYrJO:[hrStaffingPlanDetail? hrStaffingPlanDetail.proposedNosPersonnelNextYrJO:0],
      proposedNosPersonnelNextYrPlantil:[hrStaffingPlanDetail? hrStaffingPlanDetail.proposedNosPersonnelNextYrPlantil:0],
    })
  }

  eventHandler(btnclick:string){
    if(btnclick == "Save"){
      if(this.HRStaffingForm.valid)
        this.saveRecord();
    }else if(btnclick == "Delete")
      this.dialogserve.openConfirmation("Are you sure you want to delete this record?")
        .afterClosed().subscribe(result => {
          if(result == true){
            this.HRStaffingForm.patchValue({'is_deleted':true,'deleted_by':localStorage.getItem('secN'),'deleted_date':this.frmglobaldataserve.formatDate(new Date())});
            this.deleteRecord();
          }
        })
  }

  saveRecord(){
    this.frmglobaldataserve.updateRecord(this.HRStaffingForm.value,"PerformanceMgnt/PostHRStaffing")
      .subscribe(
        (response) =>
        {
          console.log("Record Saved Successfully: "+response);
          this.router.navigateByUrl("pages/performance/hr-staffing-plan/"+response).then(x => {
            this.initData(),
            this.frmglobaldataserve.openSnackBar();
          },(error) =>
          {
            console.log("Error Saving the record: "+ JSON.stringify(this.HRStaffingForm.value));
          })
        }
      )
  }

  deleteRecord(){
    this.frmglobaldataserve.updateRecord(this.HRStaffingForm.value,"PerformanceMgnt/PostHRStaffing")
      .subscribe(
        (response) => {
          console.log("Record Deleted Successfully: " + response);
          this.router.navigateByUrl("pages/performance/hr-staffing-plan/list");
        },(error) => {
          console.log("Error Deleting the Record: "+ JSON.stringify(this.HRStaffingForm.value));
        }
      )
  }
}

