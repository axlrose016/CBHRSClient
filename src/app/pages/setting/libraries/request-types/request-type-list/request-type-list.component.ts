import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { lib_request_type } from 'app/shared/model/library.model';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-request-type-list',
  templateUrl: './request-type-list.component.html',
  styleUrls: ['./request-type-list.component.scss']
})
export class RequestTypeListComponent implements OnInit {
  public baseUrl = environment.apiUrl+"Library/";
  public showLoadingProgressBar$: Observable<boolean>
  private paginator: MatPaginator;
  displayedColumns: string[] = ['requestTypeId','description','is_active'];
  @ViewChild(MatPaginator, {static:true}) set matPaginator(mp:MatPaginator)
  {
    this.paginator = mp;
    this.gridDataSource.paginator = this.paginator;
  }
  gridDataSource = new MatTableDataSource();
  requestTypeList: lib_request_type[] = [];
  constructor(
    private router:Router,
    private frmglobaldataserve: FormGlobalDataService,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.showLoadingProgressBar$ = this.frmglobaldataserve.getShowLoadingSpinner;
    this.refreshTheList();
  }

  refreshTheList(){
    var urlstr = this.baseUrl+'GetAllRequestType/';
    this.frmglobaldataserve.setLoadingProgressBar(true);
    this.frmglobaldataserve.loadList(urlstr)
      .subscribe((res: lib_request_type[]) => {
        this.requestTypeList = res;
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
      this.router.navigateByUrl("pages/settings/libraries/request-types/"+0);
    }
  }

  onUserRowSelect(id :number):void{
    this.router.navigateByUrl("pages/settings/libraries/request-types/"+id);
  }
}
