import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Guid } from "guid-typescript";
import { Observable } from "rxjs";
import { FormGlobalDataService } from "./formGlobalData.service";
import { GlobalVariablesService } from "./globalVariables.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private gd: GlobalVariablesService,
        private frmglobaldataserve: FormGlobalDataService,
        private router: Router
        ){}

    canActivate(next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean {
        debugger;
        if(this.gd.user_level == undefined){
            this.router.navigate(['/auth/login']); 
        }
        if((next.data.module == "PDS-List" || next.data.module == "Clearance-List" || next.data.module == "PES11-List")&& this.gd.user_level.userLevelId == 4 || this.gd.user_level.userLevelId == 2){
            console.log(this.gd.user_level);
            return true;
        }
        if((next.data.module == "PDS-Entry" || next.data.module == "Clearance-Entry" || next.data.module == "PES11-Entry")){
            return true;
        }
        else{
            return false;
        }
    }
    
    checkUserAccess(user_id:Guid){
        return this.frmglobaldataserve.getRecord("User/GetUserAccess/"+user_id);
    }
}