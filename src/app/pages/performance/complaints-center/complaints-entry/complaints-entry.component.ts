import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintDetail } from 'app/shared/model/performance.model';
import { PersonPDSDetail } from 'app/shared/model/PersonPDS.model';
import { DialogService } from 'app/shared/service/dialog.service';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-complaints-entry',
  templateUrl: './complaints-entry.component.html',
  styleUrls: ['./complaints-entry.component.scss']
})
export class ComplaintsEntryComponent implements OnInit {
  public ComplaintForm: FormGroup;
  public showLoadingProgressBar$: Observable<boolean>;
  public curRecordId: string = null;
  complaintDetail: ComplaintDetail;
  pdsDetail: PersonPDSDetail;
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
      this.getComplaint();
    }else{
      this.buildComplaintDetail();
    }
  }

  ngDoCheck(){
    debugger;
    if(this.dialogserve.selectedPDS$ != null){
      var selectedPerson = <PersonPDSDetail>this.dialogserve.selectedPDS$;
      this.ComplaintForm.controls['personId'].patchValue(selectedPerson.personId);
      this.ComplaintForm.controls['complaintName'].patchValue(selectedPerson.firstName + " " + selectedPerson.lastName);
    }
    if(this.dialogserve.selectedPDSOther$ != null){
      var selectedPerson = <PersonPDSDetail>this.dialogserve.selectedPDSOther$;
      this.ComplaintForm.controls['complaineeId'].patchValue(selectedPerson.personId);
      this.ComplaintForm.controls['complaineeName'].patchValue(selectedPerson.firstName + " " + selectedPerson.lastName);
    }
  }

  ngOnDestroy(){
    this.ComplaintForm.reset();
    this.dialogserve.selectedPDS$ = null;
    this.dialogserve.selectedPDSOther$ = null;
  }

  getComplaint(){
    this.frmglobaldataserve.getRecord("PerformanceMgnt/GetComplaintDetail/"+this.curRecordId)
      .subscribe((data: ComplaintDetail) =>{
        this.complaintDetail = data;
        this.buildComplaintDetail(this.complaintDetail);
      });
  }

  buildComplaintDetail(complaintDetail?: ComplaintDetail){
    this.ComplaintForm = this.fb.group({
      complaintId:[complaintDetail? complaintDetail.complaintId: Guid.raw],
      officeId:[complaintDetail? complaintDetail.officeId:null],
      personId:[complaintDetail? complaintDetail.personId: null],
      typeOfComplaint:[complaintDetail? complaintDetail.typeOfComplaint:null],
      grievanceDetails:[complaintDetail? complaintDetail.grievanceDetails:''],
      complaineeId:[complaintDetail? complaintDetail.complaineeId:null],
      emailAddressComplainant:[complaintDetail? complaintDetail.emailAddressComplainant:''],
      emailAddressSupervisor:[complaintDetail? complaintDetail.emailAddressSupervisor:''],
      complaintName:[complaintDetail? complaintDetail.complaintName:''],
      complaineeName:[complaintDetail? complaintDetail.complaineeName:'']
    })
  }

  // buildPDSDetail(pdsDetail?: PersonPDSDetail){
  //   this.personDetailForm = this.fb.group({
  //     firstName:[pdsDetail? pdsDetail.firstName:''],
  //     middleName:[pdsDetail? pdsDetail.middleName:''],
  //     lastName:[pdsDetail? pdsDetail.lastName:'']
  //   })
  // }

  // buildComplaineeDetail(complaineeDetail?: PersonPDSDetail){
  //   this.complaineeForm = this.fb.group({
  //     firstName:[complaineeDetail? complaineeDetail.firstName:''],
  //     middleName:[complaineeDetail? complaineeDetail.middleName:''],
  //     lastName:[complaineeDetail? complaineeDetail.lastName:'']
  //   })
  // }

  eventHandler(btnclick:string){
    if(btnclick == "Save"){
      if(this.ComplaintForm.valid)
        this.saveRecord();
    }else if(btnclick == "Delete")
      this.dialogserve.openConfirmation("Are you sure you want to delete this record?")
        .afterClosed().subscribe(result => {
          if(result == true){
            this.ComplaintForm.patchValue({'is_deleted':true,'deleted_by':localStorage.getItem('secN'),'deleted_date':this.frmglobaldataserve.formatDate(new Date())});
            this.deleteRecord();
          }
        })
  }

  openParticipantDialog(){
    this.dialogserve.openFormDialog('PersonProfile');
  }

  openComplaineeDialog(){
    this.dialogserve.openFormDialog('PersonProfile',true);
  }

  saveRecord(){
    this.frmglobaldataserve.updateRecord(this.ComplaintForm.value,"PerformanceMgnt/PostComplaintDetail")
      .subscribe(
        (response) =>
        {
          console.log("Record Saved Successfully: "+response);
          this.router.navigateByUrl("pages/performance/complaints-center/"+response).then(x => {
            this.initData(),
            this.frmglobaldataserve.openSnackBar();
          },(error) =>
          {
            console.log("Error Saving the record: "+ JSON.stringify(this.ComplaintForm.value));
          })
        }
      )
  }

  deleteRecord(){
    this.frmglobaldataserve.updateRecord(this.ComplaintForm.value,"PerformanceMgnt/PostComplaintDetail")
      .subscribe(
        (response) => {
          console.log("Record Deleted Successfully: " + response);
          this.router.navigateByUrl("pages/performance/complaints-center/list");
        },(error) => {
          console.log("Error Deleting the Record: "+ JSON.stringify(this.ComplaintForm.value));
        }
      )
  }

}
