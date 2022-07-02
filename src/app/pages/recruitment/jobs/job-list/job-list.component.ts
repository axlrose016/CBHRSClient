import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { JobRequisitionList } from 'app/shared/model/setting.model';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { environment } from 'environments/environment';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  public baseUrl = environment.apiUrl+"Setting/";
  public showLoadingProgressBar$: Observable<boolean>;
  private paginator: MatPaginator;
  displayedColumns: string[] = ['requisitionId','requestDate','locationAddress','jobTitle','salary','jobDescription','qualification','isOpen','isApproved','closingDate','request_type_desc','department_desc','job_category_desc'];
  @ViewChild(MatPaginator, {static:true}) set matPaginator(mp:MatPaginator)
  {
    this.paginator = mp;
    this.gridDataSource.paginator = this.paginator;
  }
  gridDataSource = new MatTableDataSource();
  jobRequisitionList:JobRequisitionList[]=[];
  constructor(
    private router: Router,
    private frmglobaldataserve: FormGlobalDataService,
    public dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.showLoadingProgressBar$ = this.frmglobaldataserve.getShowLoadingSpinner;
    this.refreshTheList();
  }

  refreshTheList(){
    var urlstr = this.baseUrl+'GetJobRequisitionList_vw/';
    this.frmglobaldataserve.setLoadingProgressBar(true);
    this.frmglobaldataserve.loadList(urlstr)
      .subscribe((res: JobRequisitionList[]) => {
        this.jobRequisitionList = res;
        this.gridDataSource.data = res;
        this.frmglobaldataserve.setLoadingProgressBar(false);
      },
      () => {})
  }

  eventHandler(btnevent:string){
    if(btnevent == "Refresh"){
      this.refreshTheList();
    }
    else if(btnevent == "Add"){
      this.router.navigateByUrl("pages/recruitment/jobs/"+0);
    }
  }

  onUserRowSelect(id :Guid):void{
    this.router.navigateByUrl("pages/recruitment/jobs/"+id);
  }

  exportTableList(){
    var fileName = "Job_Requisition_List_"+Date.now+'.xlsx';
    let dataToExport = this.jobRequisitionList
      .map(x => ({
        RequisitionId: x.requisitionId,
        JobTitle: x.jobTitle,
        JobDescription: x.jobDescription,
        IsOpen: x.isOpen,
        RequestDate: x.requestDate,
        ClosingDate: x.closingDate,
      }));
    this.frmglobaldataserve.exportToXlsx(dataToExport,'Job_Requisition_List',fileName);
  }
}
