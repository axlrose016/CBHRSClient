import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { WorkplaceApplicationPlanList } from 'app/shared/model/learningAndDevelopment.model';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { environment } from 'environments/environment';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-wap-list',
  templateUrl: './wap-list.component.html',
  styleUrls: ['./wap-list.component.scss']
})
export class WapListComponent implements OnInit {

  public baseUrl = environment.apiUrl+"WorkplaceApplicationPlan/";
  public showLoadingProgressBar$: Observable<boolean>;
  private paginator: MatPaginator;
  displayedColumns: string[] = ['wapId','firstName','middleName','lastName','title','provider','date_conduct']
  workplaceAppList:WorkplaceApplicationPlanList[] = [];
  @ViewChild(MatPaginator, {static:true}) set matPaginator(mp: MatPaginator)
  {
    this.paginator = mp;
    this.gridDataSource
  }
  gridDataSource = new MatTableDataSource();

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
      this.router.navigateByUrl("pages/learning-and-development/wap/"+0);
    }
  }
  
  onUserRowSelect(id:Guid):void{
    this.router.navigateByUrl("pages/learning-and-development/wap/"+id);
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.gridDataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  refreshTheList(){
    var urlstr = this.baseUrl+'GetWAPList_vw/';
    this.frmglobaldataserve.setLoadingProgressBar(true);
    this.frmglobaldataserve.loadList(urlstr)
      .subscribe((res: WorkplaceApplicationPlanList[]) => {
        this.workplaceAppList = res;
        this.gridDataSource.data = res;
        this.frmglobaldataserve.setLoadingProgressBar(false);
      },
      () => {})
  }

}
