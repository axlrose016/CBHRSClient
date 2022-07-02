import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lib_user_level } from 'app/shared/model/library.model';
import { DialogService } from 'app/shared/service/dialog.service';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-user-level-entry',
  templateUrl: './user-level-entry.component.html',
  styleUrls: ['./user-level-entry.component.scss']
})
export class UserLevelEntryComponent implements OnInit {
  public UserLevelForm: FormGroup;
  public lib_user_levels: lib_user_level[];
  public showLoadingProgressBar$: Observable<boolean>;
  public baseUrl = environment.apiUrl+"Library/";
  public curRecordId: number = 0;
  userLevelDetail: lib_user_level;
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
      this.getUserLevel();
    }else{
      this.buildUserLevelDetail();
    }
  }

  getUserLevel(){
    this.frmglobaldataserve.getRecord("Library/GetUserLevel?id="+this.curRecordId)
      .subscribe((data:lib_user_level) => {
        this.userLevelDetail = data;
        this.buildUserLevelDetail(this.userLevelDetail);
      })
  }

  buildUserLevelDetail(userLevelDetail?: lib_user_level){
    this.UserLevelForm = this.fb.group({
      userLevelId:[userLevelDetail?userLevelDetail.userLevelId:0],
      description:[userLevelDetail?userLevelDetail.description:''],
      user_group_id:[userLevelDetail?userLevelDetail.user_group_id:0],
      is_active:[userLevelDetail?userLevelDetail.is_active:true]
    });
  }

  eventHandler(btnclick:string){
    if(btnclick == "Save"){
      if(this.UserLevelForm.valid)
        this.saveRecord();
    }else if(btnclick == "Delete"){
      this.dialogserve.openConfirmation("Are you sure you want to delete this record?")
        .afterClosed().subscribe(result => {
          if(result == true){
            this.UserLevelForm.patchValue({'is_deleted':true,'deleted_by':'Axl','deleted_date':this.formatDate(new Date())});
            this.deleteRecord();
          }
        });
    }
  }

  deleteRecord(){
    this.frmglobaldataserve.updateRecord(this.UserLevelForm.value,"Library/PostUserLevel")
      .subscribe(
          (response) => {
            console.log("Record Deleted Successfully: "+ response);
            this.router.navigateByUrl("pages/settings/libraries/user-levels/list");
          },(error) => {
            console.log("Error Deleting the Record: "+JSON.stringify(this.UserLevelForm.value));
          }
      )
  }

  saveRecord(){
    this.frmglobaldataserve.updateRecord(this.UserLevelForm.value,"Library/PostUserLevel")
      .subscribe(
          (response) => {
            this.router.navigateByUrl("pages/settings/libraries/user-levels/"+response).then(x => {
              this.initData(),
              this.frmglobaldataserve.openSnackBar();
            },(error) =>{
              console.log("Error saving the Record: "+ JSON.stringify(this.UserLevelForm.value));
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
