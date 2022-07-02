import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PdsTableService } from 'app/@core/mock/pds';
import { PersonPDSList } from 'app/shared/model/PersonPDS.model';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { environment } from 'environments/environment';
import { DatePipe } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'ngx-pds-list',
  templateUrl: './pds-list.component.html',
  styleUrls: ['./pds-list.component.scss']
})
export class PdsListComponent implements OnInit {
  public baseUrl = environment.apiUrl+"Person/";
  public showLoadingProgressBar$: Observable<boolean>;
  private paginator: MatPaginator;
  displayedColumns: string[] = ['personId','firstName','middleName', 'lastName', 'extName', 'sex', 'birthDate', 'placeOfBirth','civil_status','citizenship','blood_type'];
  @ViewChild(MatPaginator, { static: true }) set matPaginator(mp: MatPaginator) 
  {
    this.paginator = mp;
    this.gridDataSource.paginator = this.paginator;
  }
  gridDataSource = new MatTableDataSource();
  personFamilyList:PersonPDSList[] = [];
  constructor(
    private router: Router,
    private frmglobaldataserve: FormGlobalDataService,
    private datePipe: DatePipe,
    public dialog: MatDialog) { }

  onDeleteConfirm(event):void{
    if(window.confirm('Are you sure you want to delete?')){
      event.confirm.resolve();
    }else{
      event.confirm.reject();
    }
  }

  onUserRowSelect(id :number):void{
    this.router.navigateByUrl("pages/forms/pds/"+id);
  }

  ngOnInit(): void {
    this.showLoadingProgressBar$ = this.frmglobaldataserve.getShowLoadingSpinner;
    this.refreshTheList();
  }

  refreshTheList()
  {
    var urlstr = this.baseUrl+'GetPDSList/';
    this.frmglobaldataserve.setLoadingProgressBar(true);
    this.frmglobaldataserve.loadList(urlstr)
      .subscribe((res: PersonPDSList[]) => {
        this.personFamilyList = res;
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
      this.router.navigateByUrl("pages/forms/pds/"+0);
    }
  }

  exportTableList(){
    ;
    var fileName = "PersonDetails_"+Date.now+'.xlsx';
    let dataToExport = this.personFamilyList
      .map(x => ({
        PersonId: x.personId,
        FirstName: x.firstName,
        MiddleName: x.middleName,
        LastName: x.lastName,
        ExtName: x.extName,
        Sex: x.Sex,
        BirthDate: x.birthDate,
        PlaceOfBirth: x.placeOfBirth,
        MaritalStatus: x.citil_status,
        Citizenship: x.citizenship,
        BloodType: x.blood_type,
      }));
    this.frmglobaldataserve.exportToXlsx(dataToExport,'Person_Details',fileName);
  }
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.gridDataSource.filter = filterValue.trim().toLowerCase();
  }
}
