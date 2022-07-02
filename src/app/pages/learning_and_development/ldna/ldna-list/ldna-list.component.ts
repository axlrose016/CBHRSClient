import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LDNAConsolidatedReport, LDNADetails, LDNAList_vw } from 'app/shared/model/learningAndDevelopment.model';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { environment } from 'environments/environment';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'ngx-ldna-list',
  templateUrl: './ldna-list.component.html',
  styleUrls: ['./ldna-list.component.scss']
})
export class LdnaListComponent implements OnInit {
  public baseUrl = environment.apiUrl+"LDNA/";
  public showLoadingProgressBar$: Observable<boolean>;
  private paginator: MatPaginator;
  displayedColumns:string[] = ['ldnaId','departmentDesc']
  gridDataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static:true}) set matPaginator(mp: MatPaginator)
  {
    this.paginator = mp;
    this.gridDataSource.paginator = this.paginator;
  }
  ldnaList: LDNAList_vw[] = [];
  ldnaConsoReport: LDNAConsolidatedReport[] = [];
  constructor(
    private router: Router,
    private frmglobaldataserve: FormGlobalDataService,
    private dialog: MatDialog,
  ) { 
  }

  ngOnInit(): void {
    this.showLoadingProgressBar$ = this.frmglobaldataserve.getShowLoadingSpinner;
    this.refreshTheList();
  }
  
  refreshTheList(){
    var urlstr = this.baseUrl+'GetLDNAList/';
    this.frmglobaldataserve.setLoadingProgressBar(true);
    this.frmglobaldataserve.loadList(urlstr)
      .subscribe((res: LDNADetails[]) => {
        this.ldnaList = res;
        this.gridDataSource.data = res;
        this.frmglobaldataserve.setLoadingProgressBar(false);
      },
      () => {})
  }

  eventHandler(btnevent: string){
    if(btnevent == "Refresh"){
      this.refreshTheList();
    }
    else if(btnevent == "Add"){
      this.router.navigateByUrl("pages/learning-and-development/ldna/"+0);
    }
  }

  onUserRowSelect(id:Guid):void{
    this.router.navigateByUrl("pages/learning-and-development/ldna/"+id);
  }

  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.gridDataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  exportTableList(){
    this.frmglobaldataserve.setLoadingProgressBar(true);
    this.frmglobaldataserve.loadList(this.baseUrl+'ExportLDNAConsolidated/')
    .subscribe((res: LDNAConsolidatedReport[]) => {
      this.ldnaConsoReport = res;
      this.frmglobaldataserve.setLoadingProgressBar(false);
      var fileName = "LDNAMasterList_"+Date.now+'.xlsx';
      let dataToExport = this.ldnaConsoReport
        .map(x => ({
          CoreCompetency: x.coreCompetency,
          CompetencyCategory: x.competencyCategory,
          PMED_Permanent: x.pmeD_Permanent,
          PMED_Contractual: x.pmeD_Contractual,
          Regulation_Licensing_and_Enforcement_Division_Permanent: x.regulation_Licensing_and_Enforcement_Division_Permanent, 
          Regulation_Licensing_and_Enforcement_Division_Contractual: x.regulation_Licensing_and_Enforcement_Division_Contractual,
          District_Provincial_Health_Teams_Permanent: x.district_Provincial_Health_Teams_Permanent,
          District_Provincial_Health_Teams_Contractual: x.district_Provincial_Health_Teams_Contractual
        }));
      this.frmglobaldataserve.exportToXlsx(dataToExport,'LDNAMasterList',fileName);
    },
    () => {})
  }
}
