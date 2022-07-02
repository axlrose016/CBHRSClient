import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { AuthCredential, UserToken } from '../model/auth.model';
import { FormGlobalDataService } from './formGlobalData.service';
import { LibraryService } from './library.service';

@Injectable()
export class AuthService implements CanActivate {

  public err$ = new BehaviorSubject<string>(null);
  public showLoadingProgressBar$ = new BehaviorSubject<boolean>(false);
  public baseUrl = environment.apiUrl;
  constructor(private httpc:HttpClient, 
    private router: Router,
    private frmglobaldataserve: FormGlobalDataService,
    private libraryserv: LibraryService) {    
    }

  login(auth: AuthCredential){
    debugger;
    this.showLoadingProgressBar$.next(true);
    return this.httpc.post(this.baseUrl+'auth/LoginUser',auth,{
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe((response: UserToken) => {
        localStorage.setItem('secT',response.token);
        localStorage.setItem('secN',response.userName);
        localStorage.setItem('secI',response.userId);
        localStorage.setItem('secE',response.expiration); 
        localStorage.setItem('secPI',response.personId);
        this.libraryserv.loadAllLibrary();
        this.err$.next(null);
        this.showLoadingProgressBar$.next(false);
        this.router.navigateByUrl('/pages');
      }, error => {
        if(error.status == "404"){
          this.showLoadingProgressBar$.next(false);
          this.err$.next("Invalid Credentials, Please try again..");
        }
        else{
          this.showLoadingProgressBar$.next(false);
          this.err$.next("Connection error, Please check your network or the server may be down.");
        }
    });
  }

  logout(){
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['auth/login']); 
  }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean {
    let url: string = state.url;
    var authToken = localStorage.getItem('secT');
    var authUid = localStorage.getItem('secI');
    var authExp = localStorage.getItem('secE');
    var authName = localStorage.getItem('secN');
    if((!authToken) || (!authUid) || (!authExp) || (!authName)){
      this.logout(); 
      return false;
    }
    else
    {
      return true;
    }
  }
}
