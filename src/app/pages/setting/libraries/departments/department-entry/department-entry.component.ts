import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lib_department } from 'app/shared/model/library.model';
import { DialogService } from 'app/shared/service/dialog.service';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-department-entry',
  templateUrl: './department-entry.component.html',
  styleUrls: ['./department-entry.component.scss']
})
export class DepartmentEntryComponent implements OnInit {
  public DepartmentForm: FormGroup;
  public lib_departments: lib_department[];
  public showLoadingProgressBar$: Observable<boolean>;
  public baseUrl = environment.apiUrl+"Library/";
  public curRecordId: number = 0;
  departmentDetail: lib_department;
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
      this.department();
    }else{
      this.buildRequestTypeDetail();
    }
  }

  department(){
    this.frmglobaldataserve.getRecord("Library/GetDepartment?id="+this.curRecordId)
      .subscribe((data:lib_department) => {
        this.departmentDetail = data;
        ;
        this.buildRequestTypeDetail(this.departmentDetail);
      })
  }

  buildRequestTypeDetail(requestTypeDetail?: lib_department){
    this.DepartmentForm = this.fb.group({
      departmentId:[requestTypeDetail?requestTypeDetail.departmentId:0],
      description:[requestTypeDetail?requestTypeDetail.description:''],
      is_active:[requestTypeDetail?requestTypeDetail.is_active:true]
    });
  }

  eventHandler(btnclick:string){
    if(btnclick == "Save"){
      if(this.DepartmentForm.valid)
        this.saveRecord();
    }else if(btnclick == "Delete"){
      this.dialogserve.openConfirmation("Are you sure you want to delete this record?")
        .afterClosed().subscribe(result => {
          if(result == true){
            this.DepartmentForm.patchValue({'is_deleted':true,'deleted_by':'Axl','deleted_date':this.formatDate(new Date())});
            this.deleteRecord();
          }
        });
    }
  }

  deleteRecord(){
    this.frmglobaldataserve.updateRecord(this.DepartmentForm.value,"Library/PostDepartment")
      .subscribe(
          (response) => {
            console.log("Record Deleted Successfully: "+ response);
            this.router.navigateByUrl("pages/settings/libraries/departments/list");
          },(error) => {
            console.log("Error Deleting the Record: "+JSON.stringify(this.DepartmentForm.value));
          }
      )
  }

  saveRecord(){
    this.frmglobaldataserve.updateRecord(this.DepartmentForm.value,"Library/PostDepartment")
      .subscribe(
          (response) => {
            this.router.navigateByUrl("pages/settings/libraries/departments/"+response).then(x => {
              this.initData(),
              this.frmglobaldataserve.openSnackBar();
            },(error) =>{
              console.log("Error saving the Record: "+ JSON.stringify(this.DepartmentForm.value));
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
