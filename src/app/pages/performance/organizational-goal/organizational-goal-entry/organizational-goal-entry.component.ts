import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizationalGoalDetail } from 'app/shared/model/performance.model';
import { DialogService } from 'app/shared/service/dialog.service';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-organizational-goal-entry',
  templateUrl: './organizational-goal-entry.component.html',
  styleUrls: ['./organizational-goal-entry.component.scss']
})
export class OrganizationalGoalEntryComponent implements OnInit {

  public OrgGoalForm: FormGroup;
  public showLoadingProgressBar$: Observable<boolean>;
  public curRecordId: string = null;
  orgGoalDetail: OrganizationalGoalDetail;
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
      this.getOrgGoal();
    }else{
      this.buildOrgGoalDetail();
    }
  }

    getOrgGoal(){
      this.frmglobaldataserve.getRecord("PerformanceMgnt/GetOrgGoal/"+this.curRecordId)
        .subscribe((data: OrganizationalGoalDetail) => {
          this.orgGoalDetail = data;
          this.buildOrgGoalDetail(this.orgGoalDetail);
        });
    }

    buildOrgGoalDetail(orgGoalDetail?: OrganizationalGoalDetail){
      this.OrgGoalForm = this.fb.group({
        orgGoalId:[orgGoalDetail? orgGoalDetail.orgGoalId: Guid.raw],
        mandateOfOffice:[orgGoalDetail? orgGoalDetail.mandateOfOffice:''],
        visionOfOffice:[orgGoalDetail? orgGoalDetail.visionOfOffice:''],
        missionOfOffice:[orgGoalDetail? orgGoalDetail.missionOfOffice:''],
        stratigicGoalsOfOffice:[orgGoalDetail? orgGoalDetail.stratigicGoalsOfOffice:'']
      })
    }

    eventHandler(btnclick:string){
      if(btnclick == "Save"){
        if(this.OrgGoalForm.valid)
          this.saveRecord();
      }else if(btnclick == "Delete")
        this.dialogserve.openConfirmation("Are you sure you want to delete this record?")
          .afterClosed().subscribe(result => {
            if(result == true){
              this.OrgGoalForm.patchValue({'is_deleted':true,'deleted_by':localStorage.getItem('secN'),'deleted_date':this.frmglobaldataserve.formatDate(new Date())});
              this.deleteRecord();
            }
          })
    }

    saveRecord(){
      this.frmglobaldataserve.updateRecord(this.OrgGoalForm.value,"PerformanceMgnt/PostOrgGoal")
        .subscribe(
          (response) => {
            console.log("Record Deleted Successfully: " + response);
            this.router.navigateByUrl("pages/performance/organizational-goals/list");
          },(error) => {
            console.log("Error Deleting the Record: "+ JSON.stringify(this.OrgGoalForm.value));
          }
        )
    }

    deleteRecord(){
      this.frmglobaldataserve.updateRecord(this.OrgGoalForm.value,"PerformanceMgnt/PostOrgGoal")
        .subscribe(
          (response) => {
            console.log("Record Deleted Successfully: " + response);
            this.router.navigateByUrl("pages/performance/organizational-goals/list");
          },(error) => {
            console.log("Error Deleting the Record: "+ JSON.stringify(this.OrgGoalForm.value));
          }
        )
    }
  }
