import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PES11List } from 'app/shared/model/PersonPDS.model';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-pes11-list',
  templateUrl: './pes11-list.component.html',
  styleUrls: ['./pes11-list.component.scss']
})
export class Pes11ListComponent implements OnInit {
  public baseUrl = environment.apiUrl+"PES11/";
  public showLoadingProgressBar$: Observable<boolean>;
  private paginator: MatPaginator;
  displayedColumns: string[] = ['pes11Id','firstName','middleName','lastName','grandTotal','avgPoint'];
  @ViewChild(MatPaginator, {static: true}) set matPaginator(mp: MatPaginator)
  {
    this.paginator = mp;
    this.gridDataSource.paginator = this.paginator;
  }
  gridDataSource = new MatTableDataSource();
  pes11List:PES11List[] = [];
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
      this.router.navigateByUrl("pages/forms/pes11/"+0);
    }
  }

  refreshTheList(){
    var urlstr = this.baseUrl+'GetPES11List/';
    this.frmglobaldataserve.setLoadingProgressBar(true);
    this.frmglobaldataserve.loadList(urlstr)
      .subscribe((res: PES11List[]) => {
        this.pes11List = res;
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
    this.router.navigateByUrl("pages/forms/pes11/"+id);
  }
}
