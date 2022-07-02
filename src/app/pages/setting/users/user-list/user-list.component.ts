import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserList } from 'app/shared/model/user.model';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { environment } from 'environments/environment';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public baseUrl = environment.apiUrl+"User/";
  public showLoadingProgressBar$: Observable<boolean>;
  private paginator: MatPaginator;
  displayedColumns: string[] = ['userId','userName','user_level'];
  @ViewChild(MatPaginator, {static:true}) set matPaginator(mp:MatPaginator)
  {
    this.paginator = mp;
    this.gridDataSource.paginator = this.paginator;
  }
  gridDataSource = new MatTableDataSource();
  userList:UserList[]=[];
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
    var urlstr = this.baseUrl+'GetAllUserList_vw/';
    this.frmglobaldataserve.setLoadingProgressBar(true);
    this.frmglobaldataserve.loadList(urlstr)
      .subscribe((res: UserList[]) => {
        this.userList = res;
        this.gridDataSource.data = res;
        this.frmglobaldataserve.setLoadingProgressBar(false);
      },
      () => {})
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.gridDataSource.filter = filterValue.trim().toLowerCase();
  }

  eventHandler(btnevent:string){
    if(btnevent == "Refresh"){
      this.refreshTheList();
    }
    else if(btnevent == "Add"){
      this.router.navigateByUrl("pages/settings/users/"+0);
    }
  }

  onUserRowSelect(id: Guid):void{
    this.router.navigateByUrl("pages/settings/users/"+id);
  }

  exportTableList(){
    var fileName = "User_List_"+Date.now+'.xlsx';
    let dataToExport = this.userList
      .map(x => ({
        UserId: x.userId,
        UserName: x.userName,
        UserLevel: x.user_level
      }));
    this.frmglobaldataserve.exportToXlsx(dataToExport,'User_List',fileName);
  }
}
