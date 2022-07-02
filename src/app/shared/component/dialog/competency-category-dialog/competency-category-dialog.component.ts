import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CompetencyCategoryListComponent } from 'app/pages/setting/libraries/competency-categories/competency-category-list/competency-category-list.component';
import { lib_competency_category, lib_job_category } from 'app/shared/model/library.model';
import { DialogService } from 'app/shared/service/dialog.service';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-competency-category-dialog',
  templateUrl: './competency-category-dialog.component.html',
  styleUrls: ['./competency-category-dialog.component.scss']
})
export class CompetencyCategoryDialogComponent implements OnInit {
  public competency_category: lib_competency_category;
  public baseUrl = environment.apiUrl+"Library/";
  public showLoadingProgressBar$: Observable<boolean>;
  private paginator: MatPaginator;
  displayedColumns: string[] = ['competencyId','description'];
  @ViewChild(MatPaginator, { static: true }) set matPaginator(mp: MatPaginator) 
  {
    this.paginator = mp;
    this.gridDataSource.paginator = this.paginator;
  }
  gridDataSource = new MatTableDataSource();
  lib_Competency_CategoryList:lib_competency_category[] = [];
  constructor(
    private dialogRef: MatDialogRef<CompetencyCategoryListComponent>,
    private frmglobaldataserve: FormGlobalDataService) { }

  ngOnInit(): void {
    this.refreshTheList();
  }

  refreshTheList()
  {
    var urlstr = this.baseUrl+'GetAllCompetencyCategory/';
    this.frmglobaldataserve.loadList(urlstr)
      .subscribe((res: lib_competency_category[]) => {
        this.lib_Competency_CategoryList = res;
        this.gridDataSource.data = res;
      },
      () => {})
  }

  onUserRowSelect(competencyId :number):void{
    this.frmglobaldataserve.getRecord("Library/GetCompetencyCategory?id="+competencyId)
      .subscribe((data:lib_job_category) => {
        this.competency_category = data;
        this.dialogRef.close(this.competency_category); 
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.gridDataSource.filter = filterValue.trim().toLowerCase();
  }
}
