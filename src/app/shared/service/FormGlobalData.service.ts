import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from 'environments/environment';
import {
    MatSnackBar,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition,
  } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { TransactionDialogComponent } from '../component/dialog/transaction-dialog/transaction-dialog.component';
import * as XLSX from 'xlsx';
import { PersonlistDialogComponent } from '../component/dialog/personlist-dialog/personlist-dialog.component';

@Injectable()
export class FormGlobalDataService{
    private showLoadingProgressBar$ = new BehaviorSubject<boolean>(false);
    deleteConfirmation:boolean;
    horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    verticalPosition: MatSnackBarVerticalPosition = 'top';

    get getShowLoadingSpinner(){
        return this.showLoadingProgressBar$.asObservable();
    }
    constructor(private httpc: HttpClient,private dialog: MatDialog, private _snackBar: MatSnackBar){    }

    setLoadingProgressBar(showHideSpinner:boolean){
        this.showLoadingProgressBar$.next(showHideSpinner);
    }

    openSnackBar() {
        this._snackBar.open('Record Successfull Saved!!','', {
          duration: 1000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }

    loadList(urlstr: string): Observable<any[]>
    {
        return this.getAllRecords(urlstr)
                .pipe(
                    catchError(err => {
                        var msg: string = null;
                        if(err.status == 404)
                        {
                            msg = "Record not found on specified parameters.";
                        }else{
                            msg = "System error (Form Global Data Load List)";
                        }
                        console.log(msg);
                        return throwError(err);
                    }),
                    catchError(err => {return of([])})     
                );

    }

    getAllRecords(urlstr:string): Observable<any[]>{
        return this.httpc.get<any[]>(urlstr,{
            headers: new HttpHeaders({
                "content-type":"application/json",
                "AXLToken":localStorage.getItem("secT"),
                "AXLSource":"CASSD",
                "AXLUid":localStorage.getItem("secI")
            })
        });
    }

    getRecord(urlstr:string):Observable<any>
    {
        let finurl = environment.apiUrl+urlstr;
        ;
        return this.httpc.get<any>(finurl,{
           headers: new HttpHeaders({
            "content-type":"application/json",
            "AXLToken":localStorage.getItem("secT"),
            "AXLSource":"CASSD",
            "AXLUid":localStorage.getItem("secI")
           }) 
        });
    }

    updateRecord<T>(tentity: T, urlstr: string): Observable<any>
    {
      let finurl = environment.apiUrl+urlstr;
      ;
      return this.httpc.post<any>(finurl, tentity,{
          headers: new HttpHeaders({
            "content-type":"application/json",
            "AXLToken":localStorage.getItem("secT"),
            "AXLSource":"CASSD",
            "AXLUid":localStorage.getItem("secI")
          })
      });       
    }

    updateRecordWOToken<T>(tentity: T, urlstr: string): Observable<any>{
        ;
        let finurl = environment.apiUrl+urlstr;
        return this.httpc.post<any>(finurl, tentity,{
          headers: new HttpHeaders({
            "content-type":"application/json",
          })
      });       
    }

    exportToXlsx(exportTable:any,sheetName:string,fileName:string){
        const ws: XLSX.WorkSheet=XLSX.utils.json_to_sheet(exportTable); // Converting DOM element to WorkSheet
        const wb: XLSX.WorkBook=XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb,ws,sheetName);
        XLSX.writeFile(wb,fileName);
    }

    formatDate(date) {
        const d = new Date(date);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return [year, month, day].join('-');
    }
}
