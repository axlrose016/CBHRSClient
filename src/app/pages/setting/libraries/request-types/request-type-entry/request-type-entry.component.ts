import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lib_request_type } from 'app/shared/model/library.model';
import { DialogService } from 'app/shared/service/dialog.service';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-request-type-entry',
  templateUrl: './request-type-entry.component.html',
  styleUrls: ['./request-type-entry.component.scss']
})
export class RequestTypeEntryComponent implements OnInit {
  public RequestTypeForm: FormGroup;
  public lib_request_types: lib_request_type[];
  public showLoadingProgressBar$: Observable<boolean>;
  public baseUrl = environment.apiUrl+"Library/";
  public curRecordId: number = 0;
  requestTypeDetail: lib_request_type;
  constructor(
    private fb: FormBuilder,
    private frmglobaldataserve:FormGlobalDataService,
    private dialogserve:DialogService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showLoadingProgressBar$ = this.frmglobaldataserve.getShowLoadingSpinner;
    this.frmglobaldataserve.setLoadingProgressBar(true);
    this.initData();
    this.frmglobaldataserve.setLoadingProgressBar(false);
  }

  initData(){
    this.curRecordId = +this.route.snapshot.params['id'];
    if(this.curRecordId != 0){
      this.requestType();
    }else{
      this.buildRequestTypeDetail();
    }
  }

  requestType(){
    this.frmglobaldataserve.getRecord("Library/GetRequestType?id="+this.curRecordId)
      .subscribe((data:lib_request_type) => {
        this.requestTypeDetail = data;
        ;
        this.buildRequestTypeDetail(this.requestTypeDetail);
      })
  }

  buildRequestTypeDetail(requestTypeDetail?: lib_request_type){
    this.RequestTypeForm = this.fb.group({
      requestTypeId:[requestTypeDetail?requestTypeDetail.requestTypeId:0],
      description:[requestTypeDetail?requestTypeDetail.description:''],
      is_active:[requestTypeDetail?requestTypeDetail.is_active:true]
    });
  }

  eventHandler(btnclick:string){
    if(btnclick == "Save"){
      if(this.RequestTypeForm.valid)
        this.saveRecord();
    }else if(btnclick == "Delete"){
      this.dialogserve.openConfirmation("Are you sure you want to delete this record?")
        .afterClosed().subscribe(result => {
          if(result == true){
            this.RequestTypeForm.patchValue({'is_deleted':true,'deleted_by':'Axl','deleted_date':this.formatDate(new Date())});
            this.deleteRecord();
          }
        });
    }
  }

  deleteRecord(){
    this.frmglobaldataserve.updateRecord(this.RequestTypeForm.value,"Library/PostRequestType")
      .subscribe(
          (response) => {
            console.log("Record Deleted Successfully: "+ response);
            this.router.navigateByUrl("pages/settings/libraries/request-types/list");
          },(error) => {
            console.log("Error Deleting the Record: "+JSON.stringify(this.RequestTypeForm.value));
          }
      )
  }

  saveRecord(){
    this.frmglobaldataserve.updateRecord(this.RequestTypeForm.value,"Library/PostRequestType")
      .subscribe(
          (response) => {
            this.router.navigateByUrl("pages/settings/libraries/request-types/"+response).then(x => {
              this.initData(),
              this.frmglobaldataserve.openSnackBar();
            },(error) =>{
              console.log("Error saving the Record: "+ JSON.stringify(this.RequestTypeForm.value));
            })
          }
      );
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
