import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { lib_competency_category, lib_request_type } from 'app/shared/model/library.model';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-competency-category-list',
  templateUrl: './competency-category-list.component.html',
  styleUrls: ['./competency-category-list.component.scss']
})
export class CompetencyCategoryListComponent implements OnInit {
  public baseUrl = environment.apiUrl+"Library/";
  public showLoadingProgressBar$: Observable<boolean>
  private paginator: MatPaginator;
  displayedColumns: string[] = ['competencyId','description','is_active'];
  @ViewChild(MatPaginator, {static:true}) set matPaginator(mp:MatPaginator)
  {
    this.paginator = mp;
    this.gridDataSource.paginator = this.paginator;
  }
  gridDataSource = new MatTableDataSource();
  competencyCategoryList: lib_competency_category[] = [];
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
    var urlstr = this.baseUrl+'GetAllCompetencyCategory/';
    this.frmglobaldataserve.setLoadingProgressBar(true);
    this.frmglobaldataserve.loadList(urlstr)
      .subscribe((res: lib_competency_category[]) => {
        this.competencyCategoryList = res;
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
      this.router.navigateByUrl("pages/settings/libraries/competency-categories/"+0);
    }
  }

  onUserRowSelect(id :number):void{
    this.router.navigateByUrl("pages/settings/libraries/competency-categories/"+id);
  }
}
