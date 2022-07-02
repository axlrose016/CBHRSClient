import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/shared/service/auth.service';
import { FormGlobalDataService } from 'app/shared/service/formGlobalData.service';
import { LibraryService } from 'app/shared/service/library.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  hideRegister = true;
  return: string;
  
  matcher = new MyErrorStateMatcher();

  public error$: Observable<string>;
  public showLoadingProgressBar$: Observable<boolean>;
  constructor(
    private fb: FormBuilder,
    private libraryserve: LibraryService,
    private authserv: AuthService,
    private router: Router,
    private frmglobalserv : FormGlobalDataService,
  ) { }

  ngOnInit(): void {
    const el = document.getElementById('nb-global-spinner');
    if (el) {
      el.style['display'] = 'none';
    }

    this.error$ = this.authserv.err$;
    this.showLoadingProgressBar$ = this.authserv.showLoadingProgressBar$;
  }

  signInForm = this.fb.group({
    Username: [null, Validators.required],
    Password: [null, Validators.required]    
  });

  checkPasswords(group: FormGroup) { 
    const _password = group.get('password').value;
    const _confirmPassword = group.get('confirmPassword').value;
  
    return _password === _confirmPassword ? true : { notSame: true }     
  }
  registerForm = this.fb.group({
    userName: [null, Validators.required],
    password: [null, Validators.required],
    confirmPassword:[null, Validators.required]
  }, {validators:this.checkPasswords});


  signIn(){
    if(this.signInForm.valid)
      this.authserv.login(this.signInForm.value);
  }

  register(){
    if(this.registerForm.valid)
    {
      ;
      this.authserv.showLoadingProgressBar$.next(true);
      this.frmglobalserv.updateRecordWOToken(this.registerForm.value,'User/PostUser').subscribe((response) =>
      {
        this.authserv.showLoadingProgressBar$.next(false);
        this.authserv.err$.next(null);
        this.frmglobalserv.openSnackBar();
        this.showRegisterForm();
      }, error => {
        if(error.status == "409"){
          this.authserv.showLoadingProgressBar$.next(false);
          this.authserv.err$.next("User Name already exist, Please try another.");
        }
        else{
          this.authserv.showLoadingProgressBar$.next(false);
          this.authserv.err$.next("Connection error, Please check your network or the server may be down.");
        }
    });
    }
  }

  showRegisterForm(){
    this.hideRegister = this.hideRegister == false ? true : false; 
    this.authserv.err$.next(null);
  }

  signOut() { 
    this.authserv.logout();
  }  
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
    return (invalidCtrl || invalidParent);
  }
}
