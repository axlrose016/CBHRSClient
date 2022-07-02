import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonlistDialogComponent } from 'app/shared/component/dialog/personlist-dialog/personlist-dialog.component';
import { ApplicationPlanAndAccomplishmentsDetails, WorkplaceApplicationPlanDetail } from 'app/shared/model/learningAndDevelopment.model';
import { PersonPDSDetail } from 'app/shared/model/PersonPDS.model';
import { DialogService } from 'app/shared/service/dialog.service';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-workplace-application-plan-entry',
  templateUrl: './workplace-application-plan-entry.component.html',
  styleUrls: ['./workplace-application-plan-entry.component.scss']
})
export class WorkplaceApplicationPlanEntryComponent implements OnInit {

  public WAPForm: FormGroup;
  public showLoadingProgressBar$: Observable<boolean>;
  public curRecordId: string = null;
  public selectedAPA: number;
  wapDetail: WorkplaceApplicationPlanDetail = {
    applicationPlanAndAccomplishments:[]
  }
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
    if(this.curRecordId != "0"){
      this.getWAP();
    }else{
      this.buildWapDetail();
    }
  }

  ngDoCheck(){
    if(this.dialogserve.selectedPDS$ != null){
      this.WAPForm.controls['personDetails'].patchValue(this.dialogserve.selectedPDS$);
    }
  }

  ngOnDestroy(){
    this.WAPForm.reset();
    this.dialogserve.selectedPDS$ = null;
  }

  getWAP(){
    this.frmglobaldataserve.getRecord("WorkplaceApplicationPlan/GetWAP/"+ this.curRecordId)
      .subscribe((data: WorkplaceApplicationPlanDetail) => {
        this.wapDetail = data;
        ;
        this.buildWapDetail(this.wapDetail);
      });
  }

  buildWapDetail(wapDetail?: WorkplaceApplicationPlanDetail){
    this.WAPForm = this.fb.group({
      wapId:[wapDetail? wapDetail.wapId: Guid.raw],
      personDetails: this.fb.group({
        personId: [wapDetail? wapDetail.personDetails.personId: ''],
        firstName: [wapDetail? wapDetail.personDetails.firstName: ''],
        lastName: [wapDetail? wapDetail.personDetails.lastName: ''],
        middleName: [wapDetail? wapDetail.personDetails.middleName: ''],
        birthDate:[wapDetail? wapDetail.personDetails.birthDate:''],
        placeOfBirth:[wapDetail? wapDetail.personDetails.placeOfBirth:''],
        bloodType:[wapDetail? wapDetail.personDetails.bloodType:''],
        mobileNo:[wapDetail? wapDetail.personDetails.mobileNo:''],
      }),
      title:[wapDetail? wapDetail.title: ''],
      provider:[wapDetail? wapDetail.provider: ''],
      date_conduct:[wapDetail? wapDetail.date_conduct: null],
      learningOutcome:[wapDetail? wapDetail.learningOutcome: ''],
      alignment:[wapDetail? wapDetail.alignment: ''],
      startDate:[wapDetail? wapDetail.startDate: null],
      endDate:[wapDetail? wapDetail.endDate:null],
      objective:[wapDetail? wapDetail.objective: ''],
      output:[wapDetail? wapDetail.output:''],
      applicationPlanAndAccomplishments: this.fb.array([]),
    });

    this.wapDetail.applicationPlanAndAccomplishments.forEach(i => {
      this.createAPAFormGroup(i, false);
    });
  }

  createAPAFormGroup(apa:ApplicationPlanAndAccomplishmentsDetails,isTriggered:boolean){
    let apaFG: FormGroup = this.fb.group({
      apaId:[apa? apa.apaId:'00000000-0000-0000-0000-000000000000'],
      milestone:[apa? apa.milestone:0],
      whatNeedsToBeDone:[apa? apa.whatNeedsToBeDone:''],
      targetDate:[apa? apa.targetDate: null],
      meansOfVerification:[apa? apa.meansOfVerification:''],
      dateAddressed:[apa? apa.dateAddressed:null],
      progress:[apa? apa.progress:0],
      whatWasDone:[apa? apa.whatWasDone:''],
      whatWasNotDone:[apa? apa.whatWasNotDone:''],
      ReasonForNonAccomplish:[apa? apa.ReasonForNonAccomplish:''],
      catchUpActivities:[apa?apa.catchUpActivities:'']
    });
    if(isTriggered){this.selectedAPA = this.apaFormArray.length;}
    this.apaFormArray.push(apaFG);
    ;
  }

  get apaFormArray(): FormArray{
    return this.WAPForm.get("applicationPlanAndAccomplishments") as FormArray;
  }

  eventHandler(btnclick:string){
    if(btnclick == "Save"){
      if(this.WAPForm.valid)
      this.saveRecord();
    }else if(btnclick == "Delete"){
      this.dialogserve.openConfirmation("Are you sure you want to delete this record?")
        .afterClosed().subscribe(result => {
          if(result == true){
            this.WAPForm.patchValue({'is_deleted':true,'deleted_by':'Axl','deleted_date':this.frmglobaldataserve.formatDate(new Date())});
            this.deleteRecord();
          }
        });
    }
  }

  saveRecord(){
    this.frmglobaldataserve.updateRecord(this.WAPForm.value,"WorkplaceApplicationPlan/PostWAP")
      .subscribe(
        (response) =>
        {
          console.log("Record Saved Successfully: "+response);
          this.router.navigateByUrl("pages/learning-and-development/workplace-application-plan/"+response).then(x => {
            this.initData(),
            this.frmglobaldataserve.openSnackBar();
          },(error) =>
          {
            console.log("Error Saving the record: "+ JSON.stringify(this.WAPForm.value));
          })
        }
      )
  }

  deleteRecord(){
    this.frmglobaldataserve.updateRecord(this.WAPForm.value,"WorkplaceApplicationPlan/PostWAP")
      .subscribe(
        (response) => {
          console.log("Record Deleted Successfully: " + response);
          this.router.navigateByUrl("pages/learning-and-development/workplace-application-plan/list");
        },(error) => {
          console.log("Error Deleting the Record: "+ JSON.stringify(this.WAPForm.value));
        }
      )
  }

  saveTableRecord(table:string){
    switch(table){
      case "apa":
        this.selectedAPA = null;
        break;
      default:
        break;
    }
  }

  editTableRecord(table:string, selectedIndex:number){
    switch(table){
      case "apa":
        this.selectedAPA = selectedIndex;
        break;
      default:
        break;
    }
  }

  openParticipantDialog(){
    this.dialogserve.openFormDialog('PersonProfile');
  }
}
