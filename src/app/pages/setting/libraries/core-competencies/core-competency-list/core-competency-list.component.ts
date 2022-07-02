import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { lib_core_competency } from 'app/shared/model/library.model';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-core-competency-list',
  templateUrl: './core-competency-list.component.html',
  styleUrls: ['./core-competency-list.component.scss']
})
export class CoreCompetencyListComponent implements OnInit {
  public baseUrl = environment.apiUrl+"Library/";
  public showLoadingProgressBar$: Observable<boolean>
  private paginator: MatPaginator;
  displayedColumns: string[] = ['coreCompetencyId','description','is_active'];
  @ViewChild(MatPaginator, {static:true}) set matPaginator(mp:MatPaginator)
  {
    this.paginator = mp;
    this.gridDataSource.paginator = this.paginator;
  }
  gridDataSource = new MatTableDataSource();
  coreCompetencyList: lib_core_competency[] = [];
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
    var urlstr = this.baseUrl+'GetAllCoreCompetency/';
    this.frmglobaldataserve.setLoadingProgressBar(true);
    this.frmglobaldataserve.loadList(urlstr)
      .subscribe((res: lib_core_competency[]) => {
        this.coreCompetencyList = res;
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
      this.router.navigateByUrl("pages/settings/libraries/core-competencies/"+0);
    }
  }

  onUserRowSelect(id :number):void{
    this.router.navigateByUrl("pages/settings/libraries/core-competencies/"+id);
  }
}
