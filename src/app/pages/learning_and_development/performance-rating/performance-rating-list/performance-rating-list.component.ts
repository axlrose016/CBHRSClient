import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PerformanceRateDetails, PerformanceRateResult } from 'app/shared/model/learningAndDevelopment.model';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { environment } from 'environments/environment';
import { Guid } from 'guid-typescript';
import { url } from 'inspector';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-performance-rating-list',
  templateUrl: './performance-rating-list.component.html',
  styleUrls: ['./performance-rating-list.component.scss']
})
export class PerformanceRatingListComponent implements OnInit {
  public baseUrl = environment.apiUrl+"PerformanceRating/";
  public showLoadingProgressBar$: Observable<boolean>;
  private paginator: MatPaginator;
  displayedColumns:string[] = ['performanceRateId','lastName','firstName','middleName','grandTotal','avgPoint']
  gridDataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static:true}) set MatPaginator(mp: MatPaginator)
  {
    this.paginator = mp;
    this.gridDataSource.paginator = this.paginator;
  }
  performanceRatingList: PerformanceRateResult[] = [];
  constructor(
    private router: Router,
    private frmglobaldataserve: FormGlobalDataService,
    private dialog: MatDialog,
  ){
  }

  ngOnInit(): void {
    this.showLoadingProgressBar$ = this.frmglobaldataserve.getShowLoadingSpinner;
    this.refreshTheList();
  }

  refreshTheList(){
    var urlstr = this.baseUrl+'GetPerformanceRateList/';
    this.frmglobaldataserve.setLoadingProgressBar(true);
    this.frmglobaldataserve.loadList(urlstr)
      .subscribe((res: PerformanceRateResult[]) => {
        debugger;
        this.performanceRatingList = res;
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
      this.router.navigateByUrl("pages/learning-and-development/performance-rating/"+0);
    }
  }

  onUserRowSelect(id:Guid):void{
    this.router.navigateByUrl("pages/learning-and-development/performance-rating/"+id);
  }

  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.gridDataSource.filter = filterValue.trim().toLocaleLowerCase();
  }
}
