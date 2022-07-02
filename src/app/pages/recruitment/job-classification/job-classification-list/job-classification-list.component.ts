import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { JobClassificationList_vw } from 'app/shared/model/recruitement.model';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { environment } from 'environments/environment';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-job-classification-list',
  templateUrl: './job-classification-list.component.html',
  styleUrls: ['./job-classification-list.component.scss']
})
export class JobClassificationListComponent implements OnInit {

  public baseUrl = environment.apiUrl+"Setting/";
  public showLoadingProgressBar$: Observable<boolean>;
  private paginator: MatPaginator;
    salary_grade?:number;
  displayedColumns: string[] = ['jobClassificationId','occupationalServCode','salary_grade']
  jobClassificationList:JobClassificationList_vw[] = [];
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
      this.router.navigateByUrl("pages/recruitment/job-classification/"+0);
    }
  }
  
  onUserRowSelect(id:Guid):void{
    this.router.navigateByUrl("pages/recruitment/job-classification/"+id);
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.gridDataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  refreshTheList(){
    debugger;
    var urlstr = this.baseUrl+'GetJobClassificationList/';
    this.frmglobaldataserve.setLoadingProgressBar(true);
    this.frmglobaldataserve.loadList(urlstr)
      .subscribe((res: JobClassificationList_vw[]) => {
        this.jobClassificationList = res;
        this.gridDataSource.data = res;
        this.frmglobaldataserve.setLoadingProgressBar(false);
      },
      () => {})
  }

}
