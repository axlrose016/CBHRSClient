import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InterventionCollection, WapDetail } from 'app/shared/model/learningAndDevelopment.model';
import { PersonPDSDetail } from 'app/shared/model/PersonPDS.model';
import { DialogService } from 'app/shared/service/dialog.service';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-wap-entry',
  templateUrl: './wap-entry.component.html',
  styleUrls: ['./wap-entry.component.scss']
})
export class WapEntryComponent implements OnInit {
  public WapForm: FormGroup;
  interventionsList:any;
  public showLoadingProgressBar$: Observable<boolean>;
  public curRecordId: string = null;
  wapDetail: WapDetail
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

  openParticipantDialog(){
    this.dialogserve.openFormDialog('PersonProfile');
  }

  initData(){
    debugger;
    this.curRecordId = this.route.snapshot.params['id'];
    if(this.curRecordId != "0"){
      this.getWap();
    }else{
      this.buildWapDetail();
    }
  }

  ngOnDestroy(){
    this.WapForm.reset();
    this.dialogserve.selectedPDS$ = null;
  }

  ngDoCheck(){
    if(this.dialogserve.selectedPDS$ != null){
      this.WapForm.controls['personDetails'].patchValue(this.dialogserve.selectedPDS$);
      var selectedId = <PersonPDSDetail>this.dialogserve.selectedPDS$;
      this.WapForm.patchValue({'personId':selectedId.personId})
    }
  }

  getWap(){
    this.frmglobaldataserve.getRecord("WorkplaceApplicationPlan/GetWAP/"+this.curRecordId)
      .subscribe((data: WapDetail) =>{
        this.wapDetail = data;
        this.frmglobaldataserve.getRecord("Person/GetPDS/"+this.wapDetail.personId)
          .subscribe((personData:PersonPDSDetail) => {
            this.wapDetail.personDetails = personData;
            this.buildWapDetail(this.wapDetail);
          });
      });
  }

  buildWapDetail(wapDetail?: WapDetail){
    this.WapForm = this.fb.group({
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
      personId:[wapDetail? wapDetail.personId:''],
      title:[wapDetail? wapDetail.title: ''],
      dateConduct:[wapDetail? wapDetail.dateConduct: null],
      provider:[wapDetail? wapDetail.provider:''],
      learningOutcome:[wapDetail? wapDetail.learningOutcome:''],
      otherIntervention:[wapDetail? wapDetail.otherIntervention:''],
      objectives:[wapDetail? wapDetail.objectives:''],
      output:[wapDetail? wapDetail.output:''],
      milestone:[wapDetail? wapDetail.milestone:0],
      whatNeedsToBeDone:[wapDetail? wapDetail.whatNeedsToBeDone:''],
      startDate:[wapDetail? wapDetail.startDate:null],
      endDate:[wapDetail? wapDetail.endDate:null],
      targetDays:[wapDetail? wapDetail.targetDays:0],
      mov:[wapDetail? wapDetail.mov:0],
      rating:[wapDetail? wapDetail.rating:0],
      reasonForNonAccomplishment:[wapDetail? wapDetail.reasonForNonAccomplishment:''],
      otherReason:[wapDetail? wapDetail.otherReason:''],
      has_intervention_ipcr:[wapDetail? wapDetail.has_intervention_ipcr:false],
      has_intervention_wfp:[wapDetail? wapDetail.has_intervention_wfp:false],
      has_intervention_csp:[wapDetail? wapDetail.has_intervention_csp:false],
      has_intervention_cos:[wapDetail? wapDetail.has_intervention_cos:false],
      has_intervention_idp:[wapDetail? wapDetail.has_intervention_idp:false],
      has_intervention_others:[wapDetail? wapDetail.has_intervention_others:false],
      intervention_others:[wapDetail? wapDetail.intervention_others:'']
      // interventions: this.fb.array([])
    })

    // this.wapDetail.interventions.forEach(i => {
    //   this.createInterventionFormGroup(i);
    // })

    // setTimeout((res) => {
    //   this.interventionsList = [
    //     {"interventionId":1, "description":"Office/Division/Individual Performance Commitment and Review (O/D/IPCR)"}, 
    //     {"interventionId":2, "description":"Work and Financial Plan"},
    //     {"interventionId":3, "description":"Career/Succession Plan"},
    //     {"interventionId":4, "description":"Contract of Service"},
    //     {"interventionId":5, "description":"Individual Development Plan (IDP) or Performance Improvement Plan (PIP)"},
    //     {"interventionId":6, "description":"Others, please specify"}]
    // });
  }

  // createInterventionFormGroup(intervention: InterventionCollection){
  //   let interventionFG: FormGroup = this.fb.group({
  //     interventionId:[intervention? intervention.interventionId:0]
  //   })

  //   this.interventionFormArray.push(interventionFG);
  // }

  // get interventionFormArray():FormArray{
  //   return this.WapForm.get("interventions") as FormArray;
  // }

  // onChange(event) {
  //   const interventions = <FormArray>this.WapForm.get('interventions') as FormArray;

  //   if(event.checked) {
  //     interventions.push(new FormControl(event.source.value))
  //   } else {
  //     const i = interventions.controls.findIndex(x => x.value === event.source.value);
  //     interventions.removeAt(i);
  //   }
  // }

  eventHandler(btnclick:string){
    if(btnclick == "Save"){
      if(this.WapForm.valid)
        this.saveRecord();
    }else if(btnclick == "Delete")
      this.dialogserve.openConfirmation("Are you sure you want to delete this record?")
        .afterClosed().subscribe(result => {
          if(result == true){
            this.WapForm.patchValue({'is_deleted':true,'deleted_by':localStorage.getItem('secN'),'deleted_date':this.frmglobaldataserve.formatDate(new Date())});
            this.deleteRecord();
          }
        })
  }

  saveRecord(){
    this.frmglobaldataserve.updateRecord(this.WapForm.value,"WorkplaceApplicationPlan/PostWAP")
      .subscribe(
        (response) =>
        {
          console.log("Record Saved Successfully: "+response);
          this.router.navigateByUrl("pages/learning-and-development/wap/"+response).then(x => {
            this.initData(),
            this.frmglobaldataserve.openSnackBar();
          },(error) =>
          {
            console.log("Error Saving the record: "+ JSON.stringify(this.WapForm.value));
          })
        }
      )
  }

  deleteRecord(){
    this.frmglobaldataserve.updateRecord(this.WapForm.value,"WorkplaceApplicationPlan/PostWAP")
      .subscribe(
        (response) => {
          console.log("Record Deleted Successfully: " + response);
          this.router.navigateByUrl("pages/learning-and-development/wap/list");
        },(error) => {
          console.log("Error Deleting the Record: "+ JSON.stringify(this.WapForm.value));
        }
      )
  }
}
