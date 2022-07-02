import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PersonPDSDetail, PersonPDSList } from 'app/shared/model/PersonPDS.model';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-personlist-dialog',
  templateUrl: './personlist-dialog.component.html',
  styleUrls: ['./personlist-dialog.component.scss']
})
export class PersonlistDialogComponent implements OnInit {
  public person: PersonPDSDetail;
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
  personPDSList:PersonPDSList[] = [];
  constructor(
    private dialogRef: MatDialogRef<PersonlistDialogComponent>,
    private frmglobaldataserve: FormGlobalDataService) { }

  ngOnInit(): void {
    this.refreshTheList();
  }

  refreshTheList()
  {
    var urlstr = this.baseUrl+'GetPDSList/';
    this.frmglobaldataserve.loadList(urlstr)
      .subscribe((res: PersonPDSList[]) => {
        this.personPDSList = res;
        this.gridDataSource.data = res;
      },
      () => {})
  }

  onUserRowSelect(personId :number):void{
    this.frmglobaldataserve.getRecord("Person/GetPDS/"+personId)
      .subscribe((data:PersonPDSDetail) => {
        this.person = data;
        this.dialogRef.close(this.person); 
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.gridDataSource.filter = filterValue.trim().toLowerCase();
  }
}
