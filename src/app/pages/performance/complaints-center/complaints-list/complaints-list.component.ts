import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ComplaintList } from 'app/shared/model/performance.model';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { environment } from 'environments/environment';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-complaints-list',
  templateUrl: './complaints-list.component.html',
  styleUrls: ['./complaints-list.component.scss']
})
export class ComplaintsListComponent implements OnInit {
  public baseUrl = environment.apiUrl+"PerformanceMgnt/";
  public showLoadingProgressBar$: Observable<boolean>;
  private paginator: MatPaginator;
  displayedColumns: string[] = ['complaintId','officeId','complaintName','typeOfComplaint']
  @ViewChild(MatPaginator,{static:true}) set matPaginator(mp:MatPaginator){
    this.paginator = mp;
    this.gridDataSource
  }
  gridDataSource = new MatTableDataSource();
  complaintList: ComplaintList[] = [];
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
      this.router.navigateByUrl("pages/performance/complaints-center/"+0);
    }
  }
  
  onUserRowSelect(id:Guid):void{
    this.router.navigateByUrl("pages/performance/complaints-center/"+id);
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.gridDataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  refreshTheList()
  {
    var urlstr = this.baseUrl+'GetComplaintList/';
    this.frmglobaldataserve.setLoadingProgressBar(true);
    this.frmglobaldataserve.loadList(urlstr)
      .subscribe((res: ComplaintList[]) => {
        this.complaintList = res;
        this.gridDataSource.data = res;
        this.frmglobaldataserve.setLoadingProgressBar(false);
      },
      () => {})
  }
}
