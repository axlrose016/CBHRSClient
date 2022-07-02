import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BudgetUtilizationDetail } from 'app/shared/model/performance.model';
import { DialogService } from 'app/shared/service/dialog.service';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-budget-util-entry',
  templateUrl: './budget-util-entry.component.html',
  styleUrls: ['./budget-util-entry.component.scss']
})
export class BudgetUtilEntryComponent implements OnInit {

  public BudgetForm: FormGroup;
  public showLoadingProgressBar$: Observable<boolean>;
  public curRecordId: string = null;
  budgetUtilDetail: BudgetUtilizationDetail;
  private isShow1 = null;
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
      this.getBudget();
    }else{
      this.buildBudgetDetail();
    }
  }

  getBudget(){
    this.frmglobaldataserve.getRecord("PerformanceMgnt/GetBudgetUtil/"+this.curRecordId)
      .subscribe((data: BudgetUtilizationDetail) =>{
        this.budgetUtilDetail = data;
        this.buildBudgetDetail(this.budgetUtilDetail);
      });
  }

  buildBudgetDetail(budgetDetail?: BudgetUtilizationDetail){
    this.BudgetForm = this.fb.group({
      budgetUtilId:[budgetDetail? budgetDetail.budgetUtilId: Guid.raw],
      totalBudgetJO:[budgetDetail? budgetDetail.totalBudgetJO: 0],
      totalBudgetPlantil:[budgetDetail? budgetDetail.totalBudgetPlantil:0],
      amountSpentQ1JO:[budgetDetail? budgetDetail.amountSpentQ1JO:0],
      amountSpentQ1Plantil:[budgetDetail? budgetDetail.amountSpentQ1Plantil:0],
      amountSpentQ2JO:[budgetDetail? budgetDetail.amountSpentQ2JO:0],
      amountSpentQ2Plantil:[budgetDetail? budgetDetail.amountSpentQ2Plantil:0],
      amountSpentQ3JO:[budgetDetail? budgetDetail.amountSpentQ3JO:0],
      amountSpentQ3Plantil:[budgetDetail? budgetDetail.amountSpentQ3Plantil:0],
      amountSpentQ4JO:[budgetDetail? budgetDetail.amountSpentQ4JO:0],
      amountSpentQ4Plantil:[budgetDetail? budgetDetail.amountSpentQ4Plantil:0],
      is_funding_set_aside:[budgetDetail? budgetDetail.is_funding_set_aside:null],
      with_last_year_proposed_budget:[budgetDetail? budgetDetail.with_last_year_proposed_budget:0],
      with_additional_proposed_budget:[budgetDetail? budgetDetail.with_additional_proposed_budget:0]
    })
  }

  eventHandler(btnclick:string){
    if(btnclick == "Save"){
      if(this.BudgetForm.valid)
        this.saveRecord();
    }else if(btnclick == "Delete")
      this.dialogserve.openConfirmation("Are you sure you want to delete this record?")
        .afterClosed().subscribe(result => {
          if(result == true){
            this.BudgetForm.patchValue({'is_deleted':true,'deleted_by':localStorage.getItem('secN'),'deleted_date':this.frmglobaldataserve.formatDate(new Date())});
            this.deleteRecord();
          }
        })
  }

  saveRecord(){
    this.frmglobaldataserve.updateRecord(this.BudgetForm.value,"PerformanceMgnt/PostBudgetUtil")
      .subscribe(
        (response) =>
        {
          console.log("Record Saved Successfully: "+response);
          this.router.navigateByUrl("pages/performance/budget-utilization/"+response).then(x => {
            this.initData(),
            this.frmglobaldataserve.openSnackBar();
          },(error) =>
          {
            console.log("Error Saving the record: "+ JSON.stringify(this.BudgetForm.value));
          })
        }
      )
  }

  deleteRecord(){
    this.frmglobaldataserve.updateRecord(this.BudgetForm.value,"PerformanceMgnt/PostBudgetUtil")
      .subscribe(
        (response) => {
          console.log("Record Deleted Successfully: " + response);
          this.router.navigateByUrl("pages/performance/budget-utilization/list");
        },(error) => {
          console.log("Error Deleting the Record: "+ JSON.stringify(this.BudgetForm.value));
        }
      )
  }

  onRadioChange(show:boolean){
    this.isShow1 = show;
  }
}
