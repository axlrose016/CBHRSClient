import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lib_user_level } from 'app/shared/model/library.model';
import { UserDetails } from 'app/shared/model/user.model';
import { DialogService } from 'app/shared/service/dialog.service';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-user-entry',
  templateUrl: './user-entry.component.html',
  styleUrls: ['./user-entry.component.scss']
})
export class UserEntryComponent implements OnInit {
  public showLoadingProgressBar$: Observable<boolean>;
  public curRecordId: number = 0;
  userDetail: UserDetails;
  public UserForm: FormGroup;

  public lib_user_levels: lib_user_level[];
  constructor(
    private router:Router,
    private frmglobaldataserve: FormGlobalDataService,
    private fb: FormBuilder,
    private dialogserve: DialogService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.showLoadingProgressBar$ = this.frmglobaldataserve.getShowLoadingSpinner;
    this.frmglobaldataserve.setLoadingProgressBar(true);
    this.initData();
    this.frmglobaldataserve.setLoadingProgressBar(false);
  }

  initData(){
    this.getUserLevels();
    this.curRecordId = this.route.snapshot.params['id'];
    if(this.curRecordId != 0){
      this.getUser();
    }else{
      this.buildUserDetail();
    }
  }

  getUser(){
    this.frmglobaldataserve.getRecord("User/GetUser/"+this.curRecordId)
      .subscribe((data: UserDetails) => {
        this.userDetail = data;
        this.buildUserDetail(this.userDetail);
      })
  }

  getUserLevels(){
    ;
    this.frmglobaldataserve.getRecord("Library/GetAllUserLevel")
      .subscribe((data: lib_user_level[]) => {
        this.lib_user_levels = data;
      });
  }

  buildUserDetail(userDetail?: UserDetails){
    this.UserForm = this.fb.group({
      userId:[userDetail? userDetail.userId:0],
      userName:[userDetail? userDetail.userName:''],
      user_level:[userDetail? userDetail.user_level:null],
      salt:[userDetail? userDetail.salt:''],
      hash_code:[userDetail? userDetail.hash_code:''],
      deleted_by:[userDetail? userDetail.deleted_by:''],
      deleted_date:[userDetail? userDetail.deleted_date: null],
      is_deleted:[userDetail? userDetail.is_deleted: null]
    });
  }

  eventHandler(btnclick:string){
    if(btnclick == "Save"){
      if(this.UserForm.valid) 
        this.saveRecord();
    }else if(btnclick == "Delete"){
      this.dialogserve.openConfirmation("Are you sure you want to delete this record?")
        .afterClosed().subscribe(result => {
          if(result == true){
            this.UserForm.patchValue({'is_deleted':true,'deleted_by':'Axl','deleted_date':this.formatDate(new Date())});
            this.deleteRecord();
          }
        });
    }
  }

  deleteRecord(){
    this.frmglobaldataserve.updateRecord(this.UserForm.value,"User/PostUser")
      .subscribe(
        (response) => {
          console.log("Record Deleted Successfully: " + response);
          this.router.navigateByUrl("pages/settings/users/list");
        },(error) => {
          console.log("Error Deleting the Record: " +JSON.stringify(this.UserForm.value));
        }
      )
  }

  saveRecord(){
    this.frmglobaldataserve.updateRecord(this.UserForm.value,"User/PostUser")
      .subscribe(
          (response) => {
            ;
            this.router.navigateByUrl("pages/settings/users/"+response).then(x => {
              this.initData(),
              this.frmglobaldataserve.openSnackBar();
            },(error) =>{
              console.log("Error saving the Record: "+ JSON.stringify(this.UserForm.value));
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
