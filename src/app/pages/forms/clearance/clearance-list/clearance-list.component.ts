import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ClearanceList } from 'app/shared/model/PersonPDS.model';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-clearance-list',
  templateUrl: './clearance-list.component.html',
  styleUrls: ['./clearance-list.component.scss']
})
export class ClearanceListComponent implements OnInit {
  public baseUrl = environment.apiUrl+"Clearance/";
  public showLoadingProgressBar$: Observable<boolean>;
  private paginator: MatPaginator;
  displayedColumns: string[] = ['clearanceId','firstName','middleName','lastName','dateOfApplication'];
  @ViewChild(MatPaginator, {static: true}) set matPaginator(mp: MatPaginator)
  {
    this.paginator = mp;
    this.gridDataSource.paginator = this.paginator;
  }
  gridDataSource = new MatTableDataSource();
  clearanceList:ClearanceList[] = [];
  constructor(
    private router: Router,
    private frmglobaldataserve: FormGlobalDataService,
  ) { }

  ngOnInit(): void {
    this.refreshTheList();
  }

  eventHandler(btnevent:string){
    if(btnevent == "Refresh"){
      this.refreshTheList();
    }else if(btnevent == "Add"){
      this.router.navigateByUrl("pages/forms/clearance/"+0);
    }
  }

  refreshTheList(){
    var urlstr = this.baseUrl+'GetClearanceList/';
    this.frmglobaldataserve.setLoadingProgressBar(true);
    this.frmglobaldataserve.loadList(urlstr)
      .subscribe((res: ClearanceList[]) => {
        this.clearanceList = res;
        this.gridDataSource.data = res;
        this.frmglobaldataserve.setLoadingProgressBar(false);
      },
      () => {})
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.gridDataSource.filter = filterValue.trim().toLowerCase();
  }
  
  onUserRowSelect(id :number):void{
    this.router.navigateByUrl("pages/forms/clearance/"+id);
  }
}
