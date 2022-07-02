import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OrganizationalGoalList } from 'app/shared/model/performance.model';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { environment } from 'environments/environment';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-organizational-goal-list',
  templateUrl: './organizational-goal-list.component.html',
  styleUrls: ['./organizational-goal-list.component.scss']
})
export class OrganizationalGoalListComponent implements OnInit {
  public baseUrl = environment.apiUrl+"PerformanceMgnt/";
  public showLoadingProgressBar$: Observable<boolean>;
  private paginator: MatPaginator;
  displayedColumns: string[] = ['orgGoalId','missionOfOffice','visionOfOffice']
  @ViewChild(MatPaginator, {static:true}) set matPaginator(mp: MatPaginator)
  {
    this.paginator = mp;
    this.gridDataSource
  }
  gridDataSource = new MatTableDataSource();
  orgGoalList:OrganizationalGoalList[] = [];
  constructor(
    private router:Router,
    private frmglobaldataserve: FormGlobalDataService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.showLoadingProgressBar$ = this.frmglobaldataserve.getShowLoadingSpinner;
    this.refreshTheList();
  }

  refreshTheList()
  {
    var urlstr = this.baseUrl+'GetOrgGoalList/';
    this.frmglobaldataserve.setLoadingProgressBar(true);
    this.frmglobaldataserve.loadList(urlstr)
      .subscribe((res: OrganizationalGoalList[]) => {
        this.orgGoalList = res;
        this.gridDataSource.data = res;
        this.frmglobaldataserve.setLoadingProgressBar(false);
      },
      () => {})
  }

  eventHandler(btnevent:string){
    if(btnevent == "Refresh"){
      this.refreshTheList();
    }else if(btnevent == "Add"){
      this.router.navigateByUrl("pages/performance/organizational-goals/"+0);
    }
  }
  
  onUserRowSelect(id:Guid):void{
    this.router.navigateByUrl("pages/performance/organizational-goals/"+id);
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.gridDataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

}
