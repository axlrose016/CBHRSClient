import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BudgetUtilizationList_vw } from 'app/shared/model/performance.model';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { environment } from 'environments/environment';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-budget-util-list',
  templateUrl: './budget-util-list.component.html',
  styleUrls: ['./budget-util-list.component.scss']
})
export class BudgetUtilListComponent implements OnInit {
  public baseUrl = environment.apiUrl+"PerformanceMgnt/";
  public showLoadingProgressBar$: Observable<boolean>;
  private paginator: MatPaginator;
  displayedColumns: string[] = ['budgetUtilId','totalBudgetJO','totalBudgetPlantil']
  @ViewChild(MatPaginator, {static:true}) set matPaginator(mp: MatPaginator)
  {
    this.paginator = mp;
    this.gridDataSource
  }
  gridDataSource = new MatTableDataSource();
  budgetUtilList:BudgetUtilizationList_vw[] = [];
  constructor(
    private router:Router,
    private frmglobaldataserve: FormGlobalDataService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.showLoadingProgressBar$ = this.frmglobaldataserve.getShowLoadingSpinner;
    this.refreshTheList();
  }

  eventHandler(btnevent:string){
    if(btnevent == "Refresh"){
      this.refreshTheList();
    }else if(btnevent == "Add"){
      this.router.navigateByUrl("pages/performance/budget-utilization/"+0);
    }
  }
  
  onUserRowSelect(id:Guid):void{
    this.router.navigateByUrl("pages/performance/budget-utilization/"+id);
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.gridDataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  refreshTheList()
  {
    var urlstr = this.baseUrl+'GetBudgetUtilList/';
    this.frmglobaldataserve.setLoadingProgressBar(true);
    this.frmglobaldataserve.loadList(urlstr)
      .subscribe((res: BudgetUtilizationList_vw[]) => {
        this.budgetUtilList = res;
        this.gridDataSource.data = res;
        this.frmglobaldataserve.setLoadingProgressBar(false);
      },
      () => {})
  }
}
