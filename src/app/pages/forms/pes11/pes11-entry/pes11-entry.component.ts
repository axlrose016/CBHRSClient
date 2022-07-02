import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonPDSDetail, PES11Detail } from 'app/shared/model/PersonPDS.model';
import { DialogService } from 'app/shared/service/dialog.service';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { GlobalVariablesService } from 'app/shared/service/globalVariables.service';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-pes11-entry',
  templateUrl: './pes11-entry.component.html',
  styleUrls: ['./pes11-entry.component.scss']
})
export class Pes11EntryComponent implements OnInit {
  public PES11Form: FormGroup;
  public PDSForm: FormGroup;
  public PersonDetails: Observable<PersonPDSDetail>;
  public showLoadingProgressBar$: Observable<boolean>;
  public curRecordId: string = null;
  public currUserId:string;
  constructor(
    private gd: GlobalVariablesService,
    private fb: FormBuilder,
    private frmglobaldataserve: FormGlobalDataService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogserve: DialogService
  ) { }

  ngOnInit(): void {
    if(this.gd.user_level.userLevelId == 3){
      this.currUserId = localStorage.getItem('secI')
    }else{
      this.currUserId = "00000000-0000-0000-0000-000000000000"
    }
    this.showLoadingProgressBar$ = this.frmglobaldataserve.getShowLoadingSpinner;
    this.frmglobaldataserve.setLoadingProgressBar(true);
    this.initData();
    this.frmglobaldataserve.setLoadingProgressBar(false);
  }

  initData(){
    this.curRecordId = this.route.snapshot.params['id'];
    if(this.curRecordId != "0"){
      this.getPES11();
    }
    else{
      this.buildPESForm();
      this.buildPDSForm();
    }
  }

  getPES11(){
    this.frmglobaldataserve.getRecord("PES11/GetPES11/"+this.curRecordId)
      .subscribe((data: PES11Detail) => {
        var pesData = data;
        this.buildPESForm(pesData);
        this.getPDS(pesData.personId);
      })
  }

  eventHandler(btnclick:string){
    if(btnclick == "Save"){
      if(this.PES11Form.valid)
        this.saveRecord();
    }else if(btnclick == "Delete"){
        this.deleteRecord();
    }
  }

  saveRecord(){
    this.frmglobaldataserve.updateRecord(this.PES11Form.value,"PES11/PostPES11")
      .subscribe(
        (response) =>
        {
          console.log("Record Saved Successfully: "+response);
          this.router.navigateByUrl("pages/forms/pes11/"+response).then(x => {
            this.initData(),
            localStorage.setItem('secPI',response);
            this.frmglobaldataserve.openSnackBar();
          },(error) => {
            console.log("Error Saving the Record: "+ JSON.stringify(this.PES11Form.value));
          })
        }
      )
  }

  deleteRecord(){
    this.frmglobaldataserve.updateRecord(this.PES11Form.value,"Clearance/PostClearance")
      .subscribe(
        (response) => 
        {
          console.log("Record Deleted Successfully: "+response);
          this.router.navigateByUrl("pages/forms/clearance/list");
        },(error) => {
          console.log("Error Deleting the Record: "+JSON.stringify(this.PES11Form.value));
        }
      )
  }

  getPDS(id:Guid){
    this.frmglobaldataserve.getRecord("Person/GetPDS/"+id) 
      .subscribe((data: PersonPDSDetail) => {
        var pds = data;
        this.buildPDSForm(pds);
      })
  }
  

  buildPDSForm(pds?: PersonPDSDetail){
    this.PDSForm = this.fb.group({
      personId:[pds? pds.personId: Guid.raw],
      fullName:[pds? pds.firstName + " " + pds.lastName :''],
    })
  }

  buildPESForm(pes?: PES11Detail){
    this.PES11Form = this.fb.group({
      pes11Id:[pes? pes.pes11Id: Guid.raw],
      personId:[pes? pes.personId: null],
      immediateSupervisor:[pes? pes.immediateSupervisor:''],
      immediateSupPosition:[pes? pes.immediateSupPosition:0],
      reviewPeriod:[pes? pes.reviewPeriod: ''],
      scr_diverseInfo:[pes? pes.scr_diverseInfo:0],
      scr_researchesData:[pes? pes.scr_researchesData:0],
      scr_usesIntuition:[pes? pes.scr_usesIntuition:0],
      scr_identifiesData:[pes? pes.scr_identifiesData:0],
      scr_designsWorkflows:[pes? pes.scr_designsWorkflows:0],
      scr_volunteersReadily:[pes? pes.scr_volunteersReadily:0],
      scr_undertakeSelfDev:[pes? pes.scr_undertakeSelfDev:0],
      scr_seekIncResponsibilities:[pes? pes.scr_seekIncResponsibilities:0],
      scr_takeIndActions:[pes? pes.scr_takeIndActions:0],
      scr_takesAdvantage:[pes? pes.scr_takesAdvantage:0],
      scr_askForHelp:[pes? pes.scr_askForHelp:0],
      scr_creativity:[pes? pes.scr_creativity:0],
      scr_resourceful:[pes? pes.scr_resourceful:0],
      scr_improveWork:[pes? pes.scr_improveWork:0],
      scr_devInnovateIdeas:[pes? pes.scr_devInnovateIdeas:0],
      scr_competent:[pes? pes.scr_competent:0],
      scr_exhibitAbility:[pes? pes.scr_exhibitAbility:0],
      scr_keepsAbreast:[pes? pes.scr_keepsAbreast:0],
      scr_minimalSupervision:[pes? pes.scr_minimalSupervision:0],
      scr_displaysUnderstanding:[pes? pes.scr_displaysUnderstanding:0],
      scr_usesResources:[pes? pes.scr_usesResources:0],
      scr_plansWorkAct:[pes? pes.scr_plansWorkAct:0],
      scr_usesTimeEff:[pes? pes.scr_usesTimeEff:0],
      scr_plansForAddResources:[pes? pes.scr_plansForAddResources:0],
      scr_integratesChanges:[pes? pes.scr_integratesChanges:0],
      scr_setsGoals:[pes? pes.scr_setsGoals:0],
      scr_worksOrganizedManner:[pes? pes.scr_worksOrganizedManner:0],
      scr_balancesTeam:[pes? pes.scr_balancesTeam:0],
      scr_exhibitsObjective:[pes? pes.scr_exhibitAbility:0],
      scr_welcomesFeedback:[pes? pes.scr_welcomesFeedback:0],
      scr_contribute:[pes? pes.scr_contribute:0],
      scr_putsSuccess:[pes? pes.scr_putsSuccess:0],
      scr_expressesIdeas:[pes? pes.scr_expressesIdeas:0],
      scr_writesClearly:[pes? pes.scr_writesClearly:0],
      scr_exhibitsGoodListening:[pes? pes.scr_exhibitsGoodListening:0],
      scr_keepsOtherAdequate:[pes? pes.scr_keepsOtherAdequate:0],
      scr_usesAppCom:[pes? pes.scr_usesAppCom:0],
      scr_presenDataEff:[pes? pes.scr_presenDataEff:0],
      scr_courtesy:[pes? pes.scr_courtesy:0],
      scr_humanRelations:[pes? pes.scr_humanRelations:0],
      scr_integrity:[pes? pes.scr_integrity:0],
      scr_stressTolerance:[pes? pes.scr_stressTolerance:0],
      scr_complianceToOffice:[pes? pes.scr_complianceToOffice:0],
      scr_punctuality:[pes? pes.scr_punctuality:0],
      grandTotal:[pes? pes.grandTotal:0],
      avgPoint:[pes? pes.avgPoint:0],
    })
  }

  ngDoCheck(){
    if(this.dialogserve.selectedPDS$ != null){
      debugger;
      this.PersonDetails = this.dialogserve.selectedPDS$;
      var selectedId = <PersonPDSDetail>this.PersonDetails;
      this.PES11Form.patchValue({'personId': selectedId.personId})
      this.buildPDSForm(selectedId);
    }
  }

  openParticipantDialog(){
    this.dialogserve.openFormDialog('PersonProfile');
  }
}
