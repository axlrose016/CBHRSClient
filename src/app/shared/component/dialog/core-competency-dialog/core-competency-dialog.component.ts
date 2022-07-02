import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CoreCompetencyListComponent } from 'app/pages/setting/libraries/core-competencies/core-competency-list/core-competency-list.component';
import { lib_core_competency } from 'app/shared/model/library.model';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-core-competency-dialog',
  templateUrl: './core-competency-dialog.component.html',
  styleUrls: ['./core-competency-dialog.component.scss']
})
export class CoreCompetencyDialogComponent implements OnInit {
  public core_competency: lib_core_competency;
  public baseUrl = environment.apiUrl+"Library/";
  public showLoadingProgressBar$: Observable<boolean>;
  private paginator: MatPaginator;
  displayedColumns: string[] = ['coreCompetencyId','description'];
  @ViewChild(MatPaginator, { static: true }) set matPaginator(mp: MatPaginator) 
  {
    this.paginator = mp;
    this.gridDataSource.paginator = this.paginator;
  }
  gridDataSource = new MatTableDataSource();
  lib_Core_Competency:lib_core_competency[] = [];
  constructor(
    private dialogRef: MatDialogRef<CoreCompetencyListComponent>,
    private frmglobaldataserve: FormGlobalDataService) { }

  ngOnInit(): void {
    this.refreshTheList();
  }

  refreshTheList()
  {
    var urlstr = this.baseUrl+'GetAllCoreCompetency/';
    this.frmglobaldataserve.loadList(urlstr)
      .subscribe((res: lib_core_competency[]) => {
        this.lib_Core_Competency = res;
        this.gridDataSource.data = res;
      },
      () => {})
  }

  onUserRowSelect(coreCompetencyId :number):void{
    this.frmglobaldataserve.getRecord("Library/GetCoreCompetency?id="+coreCompetencyId)
      .subscribe((data:lib_core_competency) => {
        this.core_competency = data;
        ;
        this.dialogRef.close(this.core_competency); 
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.gridDataSource.filter = filterValue.trim().toLowerCase();
  }
}
