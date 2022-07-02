import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClearanceDetail, PersonPDSDetail } from 'app/shared/model/PersonPDS.model';
import { DialogService } from 'app/shared/service/dialog.service';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { GlobalVariablesService } from 'app/shared/service/globalVariables.service';
import { environment } from 'environments/environment';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-clearance-entry',
  templateUrl: './clearance-entry.component.html',
  styleUrls: ['./clearance-entry.component.scss']
})
export class ClearanceEntryComponent implements OnInit {
  public ClearanceForm: FormGroup;
  public PDSForm: FormGroup;
  public PersonDetails: Observable<PersonPDSDetail>;
  public showLoadingProgressBar$: Observable<boolean>;
  public curRecordId: string = null;
  public currUserId:string;
  public baseUrl = environment.apiUrl+"Clearance/";
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
      this.getClearance();
    }
    else{
      this.buildClearanceForm();
      this.buildPDSForm();
    }
  }

  getClearance(){
    this.frmglobaldataserve.getRecord("Clearance/GetClearance/"+this.curRecordId)
      .subscribe((data: ClearanceDetail) => {
        var clearanceData = data;
        this.buildClearanceForm(clearanceData);
        this.getPDS(clearanceData.personId);
      });
  }

  getPDS(id:Guid){
    this.frmglobaldataserve.getRecord("Person/GetPDS/"+id) 
      .subscribe((data: PersonPDSDetail) => {
        var pds = data;
        this.buildPDSForm(pds);
      })
  }
 
  buildClearanceForm(clearanceDetail?: ClearanceDetail){
    this.ClearanceForm = this.fb.group({
      clearanceId:[clearanceDetail? clearanceDetail.clearanceId: Guid.raw],
      dateOfApplication:[clearanceDetail? clearanceDetail.dateOfApplication: ''],
      isTransfer:[clearanceDetail? clearanceDetail.isTransfer: false],
      isRetirement:[clearanceDetail? clearanceDetail.isRetirement: false],
      isResignation:[clearanceDetail? clearanceDetail.isResignation: false],
      isLeave:[clearanceDetail? clearanceDetail.isLeave: false],
      isOther:[clearanceDetail? clearanceDetail.isOther: false],
      specifyOther:[clearanceDetail? clearanceDetail.specifyOther: ''],
      effectivityInclusivePeriod:[clearanceDetail? clearanceDetail.effectivityInclusivePeriod:''],
      immediateSupervisor:[clearanceDetail? clearanceDetail.immediateSupervisor:''],
      divisionHead:[clearanceDetail? clearanceDetail.divisionHead:''],
      withPendingAdminCase:[clearanceDetail? clearanceDetail.withPendingAdminCase: false],
      withOnGoingInvestigation:[clearanceDetail? clearanceDetail.withOnGoingInvestigation: false],
      personId:[clearanceDetail? clearanceDetail.personId: null],
    })
  }

  buildPDSForm(pds?: PersonPDSDetail){
    this.PDSForm = this.fb.group({
      personId:[pds? pds.personId: Guid.raw],
      fullName:[pds? pds.firstName + " " + pds.lastName :''],
    })
  }

  eventHandler(btnclick:string){
    if(btnclick == "Save"){
      if(this.ClearanceForm.valid)
        this.saveRecord();
    }else if(btnclick == "Delete"){
        this.deleteRecord();
    }
  }

  saveRecord(){
    this.frmglobaldataserve.updateRecord(this.ClearanceForm.value,"Clearance/PostClearance")
      .subscribe(
        (response) =>
        {
          console.log("Record Saved Successfully: "+response);
          this.router.navigateByUrl("pages/forms/clearance/"+response).then(x => {
            this.initData(),
            localStorage.setItem('secPI',response);
            this.frmglobaldataserve.openSnackBar();
          },(error) => {
            console.log("Error Saving the Record: "+ JSON.stringify(this.ClearanceForm.value));
          })
        }
      )
  }

  deleteRecord(){
    this.frmglobaldataserve.updateRecord(this.ClearanceForm.value,"Clearance/PostClearance")
      .subscribe(
        (response) => 
        {
          console.log("Record Deleted Successfully: "+response);
          this.router.navigateByUrl("pages/forms/clearance/list");
        },(error) => {
          console.log("Error Deleting the Record: "+JSON.stringify(this.ClearanceForm.value));
        }
      )
  }

  ngDoCheck(){
    if(this.dialogserve.selectedPDS$ != null){
      debugger;
      this.PersonDetails = this.dialogserve.selectedPDS$;
      var selectedId = <PersonPDSDetail>this.PersonDetails;
      this.ClearanceForm.patchValue({'personId': selectedId.personId})
      this.buildPDSForm(selectedId);
    }
  }

  openParticipantDialog(){
    this.dialogserve.openFormDialog('PersonProfile');
  }
}
