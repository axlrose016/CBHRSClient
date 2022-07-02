import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PerformanceRateDetails } from 'app/shared/model/learningAndDevelopment.model';
import { PersonPDSDetail } from 'app/shared/model/PersonPDS.model';
import { DialogService } from 'app/shared/service/dialog.service';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { GlobalVariablesService } from 'app/shared/service/globalVariables.service';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-performance-rating-entry',
  templateUrl: './performance-rating-entry.component.html',
  styleUrls: ['./performance-rating-entry.component.scss']
})
export class PerformanceRatingEntryComponent implements OnInit {

  public PDSForm: FormGroup;
  public PerfRateForm: FormGroup;
  public PersonDetails: Observable<PersonPDSDetail>;
  public showLoadingProgressBar$: Observable<boolean>;
  public curRecordId: string = null
  public currUerId:string;
  constructor(
    private gd:GlobalVariablesService,
    private fb: FormBuilder,
    private frmglobaldataserve: FormGlobalDataService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogserve: DialogService,

  ) { }

  ngOnInit(): void {
    // if(this.gd.user_level.userLevelId == 3){
    //   this.curRecordId = localStorage.getItem('secI')
    // }else{
    //   this.curRecordId = "00000000-0000-0000-0000-000000000000"
    // }
    this.showLoadingProgressBar$ = this.frmglobaldataserve.getShowLoadingSpinner;
    this.frmglobaldataserve.setLoadingProgressBar(true);
    this.initData();
    this.frmglobaldataserve.setLoadingProgressBar(false);
  }
  
  getPerfRate(){
    this.frmglobaldataserve.getRecord("PerformanceRating/GetPerformanceRate/"+this.curRecordId)
      .subscribe((data) => {
        var perfData = <PerformanceRateDetails>data;
        this.frmglobaldataserve.getRecord("Person/GetPDS/"+data.personId)
          .subscribe((personData: PersonPDSDetail) => {
            perfData.personDetails = personData;
            this.buildPerfRateForm(perfData);
          });
        //this.getPDS(perfData.personId);
      },(err) => {
        this.buildPerfRateForm();
      });
  }

  eventHandler(btnclick:string){
    if(btnclick == "Save"){
      if(this.PerfRateForm.valid)
        this.saveRecord();
    }else if(btnclick == "Delete"){
      this.deleteRecord();
    }
  }

  saveRecord(){
    this.frmglobaldataserve.updateRecord(this.PerfRateForm.value,"PerformanceRating/PostRate")
      .subscribe(
        (response) => 
        {
          console.log("Record Saved Successfully: "+ response);
          this.router.navigateByUrl("pages/learning-and-development/performance-rating/"+response).then(x => {
            this.initData(),
            localStorage.setItem('secPI',response);
            this.frmglobaldataserve.openSnackBar();
          },(error) => {
            console.log("Error Saving the Record: "+JSON.stringify(this.PerfRateForm.value));
          })
        }
      )
  }

  initData(){
    debugger;
    this.curRecordId = this.route.snapshot.params['id'];
    if(this.curRecordId != "0"){
      this.getPerfRate();
    }else{
      this.buildPerfRateForm();
      this.buildPDSForm();
    }
  }

  deleteRecord(){
    this.frmglobaldataserve.updateRecord(this.PerfRateForm.value,"PerformanceRating/PostRate")
      .subscribe(
      (response) => 
      {
        console.log("Record Deleted Successfully: "+response);
        this.router.navigateByUrl("pages/learning-and-development/performance-rating/list");
      },(error) => {
        console.log("Error Deleting the Record: "+JSON.stringify(this.PerfRateForm.value));
      }
    )
  }

  getPDS(id:Guid){
    this.frmglobaldataserve.getRecord("Person/GetPDS/"+id)
      .subscribe((data: PersonPDSDetail) => {
        this.PDSForm.controls['personId'].setValue(data.personId);
        this.PDSForm.controls['fullName'].setValue(data.firstName);
      })
  }

  buildPDSForm(pds?: PersonPDSDetail){
    this.PDSForm = this.fb.group({
      personId:[pds? pds.personId: Guid.raw],
      fullName:[pds? pds.firstName + " " + pds.lastName : ''],
    })
  }

  calculate() {
    this.PerfRateForm.get('grandTotal').setValue(
      this.PerfRateForm.get('scr_diverseInfo').value + 
      this.PerfRateForm.get('scr_researchesData').value +
      this.PerfRateForm.get('scr_usesIntuition').value +
      this.PerfRateForm.get('scr_identifiesData').value +
      this.PerfRateForm.get('scr_designsWorkflows').value +
      this.PerfRateForm.get('scr_volunteersReadily').value +
      this.PerfRateForm.get('scr_undertakeSelfDev').value +
      this.PerfRateForm.get('scr_seekIncResponsibilities').value +
      this.PerfRateForm.get('scr_takeIndActions').value +
      this.PerfRateForm.get('scr_takesAdvantage').value +
      this.PerfRateForm.get('scr_askForHelp').value +
      this.PerfRateForm.get('scr_creativity').value +
      this.PerfRateForm.get('scr_resourceful').value +
      this.PerfRateForm.get('scr_improveWork').value +
      this.PerfRateForm.get('scr_devInnovateIdeas').value +
      this.PerfRateForm.get('scr_competent').value +
      this.PerfRateForm.get('scr_exhibitAbility').value +
      this.PerfRateForm.get('scr_keepsAbreast').value +
      this.PerfRateForm.get('scr_minimalSupervision').value +
      this.PerfRateForm.get('scr_displaysUnderstanding').value +
      this.PerfRateForm.get('scr_usesResources').value +
      this.PerfRateForm.get('scr_plansWorkAct').value +
      this.PerfRateForm.get('scr_usesTimeEff').value +
      this.PerfRateForm.get('scr_plansForAddResources').value +
      this.PerfRateForm.get('scr_integratesChanges').value +
      this.PerfRateForm.get('scr_setsGoals').value +
      this.PerfRateForm.get('scr_worksOrganizedManner').value +
      this.PerfRateForm.get('scr_balancesTeam').value +
      this.PerfRateForm.get('scr_exhibitsObjective').value +
      this.PerfRateForm.get('scr_welcomesFeedback').value +
      this.PerfRateForm.get('scr_contribute').value +
      this.PerfRateForm.get('scr_putsSuccess').value +
      this.PerfRateForm.get('scr_expressesIdeas').value +
      this.PerfRateForm.get('scr_writesClearly').value +
      this.PerfRateForm.get('scr_exhibitsGoodListening').value +
      this.PerfRateForm.get('scr_keepsOtherAdequate').value +
      this.PerfRateForm.get('scr_usesAppCom').value +
      this.PerfRateForm.get('scr_presenDataEff').value +
      this.PerfRateForm.get('scr_courtesy').value +
      this.PerfRateForm.get('scr_humanRelations').value +
      this.PerfRateForm.get('scr_integrity').value +
      this.PerfRateForm.get('scr_stressTolerance').value +
      this.PerfRateForm.get('scr_complianceToOffice').value +
      this.PerfRateForm.get('scr_punctuality').value 
    )
    this.PerfRateForm.get('avgPoint').setValue(
      this.PerfRateForm.get('grandTotal').value / 44
    )
  }

  buildPerfRateForm(perfRate?: PerformanceRateDetails){
    this.PerfRateForm = this.fb.group({
      performanceRateId:[perfRate? perfRate.performanceRateId: Guid.raw],
      personId:[perfRate? perfRate.personId: null],
      fullName:[perfRate? perfRate.personDetails.firstName + ' ' + perfRate.personDetails.middleName + ' ' + perfRate.personDetails.lastName : ''],
      scr_diverseInfo:[perfRate? perfRate.scr_diverseInfo:0],
      scr_researchesData:[perfRate? perfRate.scr_researchesData:0],
      scr_usesIntuition:[perfRate? perfRate.scr_usesIntuition:0],
      scr_identifiesData:[perfRate? perfRate.scr_identifiesData:0],
      scr_designsWorkflows:[perfRate? perfRate.scr_designsWorkflows:0],
      scr_volunteersReadily:[perfRate? perfRate.scr_volunteersReadily:0],
      scr_undertakeSelfDev:[perfRate? perfRate.scr_undertakeSelfDev:0],
      scr_seekIncResponsibilities:[perfRate? perfRate.scr_seekIncResponsibilities:0],
      scr_takeIndActions:[perfRate? perfRate.scr_takeIndActions:0],
      scr_takesAdvantage:[perfRate? perfRate.scr_takesAdvantage:0],
      scr_askForHelp:[perfRate? perfRate.scr_askForHelp:0],
      scr_creativity:[perfRate? perfRate.scr_creativity:0],
      scr_resourceful:[perfRate? perfRate.scr_resourceful:0],
      scr_improveWork:[perfRate? perfRate.scr_improveWork:0],
      scr_devInnovateIdeas:[perfRate? perfRate.scr_devInnovateIdeas:0],
      scr_competent:[perfRate? perfRate.scr_competent:0],
      scr_exhibitAbility:[perfRate? perfRate.scr_exhibitAbility:0],
      scr_keepsAbreast:[perfRate? perfRate.scr_keepsAbreast:0],
      scr_minimalSupervision:[perfRate? perfRate.scr_minimalSupervision:0],
      scr_displaysUnderstanding:[perfRate? perfRate.scr_displaysUnderstanding:0],
      scr_usesResources:[perfRate? perfRate.scr_usesResources:0],
      scr_plansWorkAct:[perfRate? perfRate.scr_plansWorkAct:0],
      scr_usesTimeEff:[perfRate? perfRate.scr_usesTimeEff:0],
      scr_plansForAddResources:[perfRate? perfRate.scr_plansForAddResources:0],
      scr_integratesChanges:[perfRate? perfRate.scr_integratesChanges:0],
      scr_setsGoals:[perfRate? perfRate.scr_setsGoals:0],
      scr_worksOrganizedManner:[perfRate? perfRate.scr_worksOrganizedManner:0],
      scr_balancesTeam:[perfRate? perfRate.scr_balancesTeam:0],
      scr_exhibitsObjective:[perfRate? perfRate.scr_exhibitAbility:0],
      scr_welcomesFeedback:[perfRate? perfRate.scr_welcomesFeedback:0],
      scr_contribute:[perfRate? perfRate.scr_contribute:0],
      scr_putsSuccess:[perfRate? perfRate.scr_putsSuccess:0],
      scr_expressesIdeas:[perfRate? perfRate.scr_expressesIdeas:0],
      scr_writesClearly:[perfRate? perfRate.scr_writesClearly:0],
      scr_exhibitsGoodListening:[perfRate? perfRate.scr_exhibitsGoodListening:0],
      scr_keepsOtherAdequate:[perfRate? perfRate.scr_keepsOtherAdequate:0],
      scr_usesAppCom:[perfRate? perfRate.scr_usesAppCom:0],
      scr_presenDataEff:[perfRate? perfRate.scr_presenDataEff:0],
      scr_courtesy:[perfRate? perfRate.scr_courtesy:0],
      scr_humanRelations:[perfRate? perfRate.scr_humanRelations:0],
      scr_integrity:[perfRate? perfRate.scr_integrity:0],
      scr_stressTolerance:[perfRate? perfRate.scr_stressTolerance:0],
      scr_complianceToOffice:[perfRate? perfRate.scr_complianceToOffice:0],
      scr_punctuality:[perfRate? perfRate.scr_punctuality:0],
      grandTotal:[perfRate? perfRate.grandTotal:0],
      avgPoint:[perfRate? perfRate.avgPoint:0],
    })
  }

  ngDoCheck(){
    if(this.dialogserve.selectedPDS$ != null){
      this.PersonDetails = this.dialogserve.selectedPDS$;
      var selectedId = <PersonPDSDetail>this.PersonDetails;
      this.PerfRateForm.patchValue({'personId':selectedId.personId});
      this.PerfRateForm.patchValue({'fullName':selectedId.firstName + ' ' + selectedId.middleName + ' ' + selectedId.lastName});
      //this.buildPDSForm(selectedId);
    }
  }

  ngOnDestroy(){
    this.PerfRateForm.reset();
    this.dialogserve.selectedPDS$ = null;
  }

  openParticipantDialog(){
    this.dialogserve.openFormDialog('PersonProfile');
  }
}
