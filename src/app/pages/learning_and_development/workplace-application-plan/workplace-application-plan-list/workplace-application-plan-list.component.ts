import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { WorkplaceApplicationPlanDetail, WorkplaceApplicationPlanList } from 'app/shared/model/learningAndDevelopment.model';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { environment } from 'environments/environment';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-workplace-application-plan-list',
  templateUrl: './workplace-application-plan-list.component.html',
  styleUrls: ['./workplace-application-plan-list.component.scss']
})
export class WorkplaceApplicationPlanListComponent implements OnInit {
  public baseUrl = environment.apiUrl+"WorkplaceApplicationPlan/";
  public showLoadingProgressBar$: Observable<boolean>;
  private paginator: MatPaginator;
  displayedColumns: string[] = ['wapId','personId','firstName','middleName','lastName','title','provider','date_conduct'];
  @ViewChild(MatPaginator, {static:true}) set matPaginator(mp: MatPaginator)
  {
    this.paginator = mp;
    this.gridDataSource.paginator = this.paginator;
  }
  gridDataSource = new MatTableDataSource();
  workplaceApplicationPlanList: WorkplaceApplicationPlanList[] = [];
  constructor(
    private router:Router,
    private frmglobaldataserve: FormGlobalDataService,
    private dialog: MatDialog){}

  ngOnInit(): void {
    this.showLoadingProgressBar$ = this.frmglobaldataserve.getShowLoadingSpinner;
    this.refreshTheList();
  }

  refreshTheList(){
    var urlstr = this.baseUrl+'GetWAPList_vw/';
    this.frmglobaldataserve.setLoadingProgressBar(true);
    this.frmglobaldataserve.loadList(urlstr)
      .subscribe((res: WorkplaceApplicationPlanList[]) => {
        this.workplaceApplicationPlanList = res;
        this.gridDataSource.data = res;
        this.frmglobaldataserve.setLoadingProgressBar(false);
      },
      () => {})
  }

  eventHandler(btnevent:string){
    if(btnevent == "Refresh")
    {
      console.log("Refresh");
      this.refreshTheList();
    }
    else if(btnevent == "Add"){
      console.log("Add");
      this.router.navigateByUrl("pages/learning-and-development/workplace-application-plan/"+0);
    }
  }

  onUserRowSelect(id:Guid):void{
    this.router.navigateByUrl("pages/learning-and-development/workplace-application-plan/"+id);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.gridDataSource.filter = filterValue.trim().toLowerCase();
    ;
  }
}
