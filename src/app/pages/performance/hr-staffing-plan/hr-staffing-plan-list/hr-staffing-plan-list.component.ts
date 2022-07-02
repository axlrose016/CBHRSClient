import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HRStaffingPlanList } from 'app/shared/model/performance.model';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { environment } from 'environments/environment';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-hr-staffing-plan-list',
  templateUrl: './hr-staffing-plan-list.component.html',
  styleUrls: ['./hr-staffing-plan-list.component.scss']
})
export class HrStaffingPlanListComponent implements OnInit {
  public baseUrl = environment.apiUrl+"PerformanceMgnt/";
  public showLoadingProgressBar$: Observable<boolean>;
  private paginator: MatPaginator;
  displayedColumns: string[] = ['hrStaffingId','existingNosPersonnelJO','existingNosPersonnelPlantil']
  @ViewChild(MatPaginator, {static: true}) set matPaginator(mp: MatPaginator){
    this.paginator = mp;
    this.gridDataSource
  }
  gridDataSource = new MatTableDataSource();
  hrStaffingPlanLst:HRStaffingPlanList[] = [];
  constructor(
    private router: Router,
    private frmglobaldataserve: FormGlobalDataService,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.showLoadingProgressBar$ = this.frmglobaldataserve.getShowLoadingSpinner;
    this.refreshTheList();
  }

  refreshTheList()
  {
    var urlstr = this.baseUrl+'GetHRStaffing/';
    this.frmglobaldataserve.setLoadingProgressBar(true);
    this.frmglobaldataserve.loadList(urlstr)
      .subscribe((res: HRStaffingPlanList[]) => {
        this.hrStaffingPlanLst = res;
        this.gridDataSource.data = res;
        this.frmglobaldataserve.setLoadingProgressBar(false);
      },
      () => {})
  }

  eventHandler(btnevent:string){
    if(btnevent == "Refresh"){
      this.refreshTheList();
    }else if(btnevent == "Add"){
      this.router.navigateByUrl("pages/performance/hr-staffing-plan/"+0);
    }
  }
  
  onUserRowSelect(id:Guid):void{
    this.router.navigateByUrl("pages/performance/hr-staffing-plan/"+id);
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.gridDataSource.filter = filterValue.trim().toLocaleLowerCase();
  }


}
