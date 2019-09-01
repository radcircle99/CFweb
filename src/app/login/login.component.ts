import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from "@angular/forms";
// import { AppService } from "../app.service";
import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { AuthLoginInfo } from '../auth/login-info';
import { SignUpInfo } from '../auth/sigup-info';

import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;

  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService){ }
  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  onSubmit() {
    console.log(this.form);

    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.reloadPage();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );

      console.log(this.form);
      this.signupInfo = new SignUpInfo(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password);

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );

  }


  reloadPage() {
    window.location.reload();
  }

// loginForm:FormGroup;

// credentials={
//     username:'',
//     password:'',
// }
//   constructor(private fb: FormBuilder,
//               private appService:AppService,
//               private router :Router) { }

//   ngOnInit() {
// //       this.loginForm=this.fb.group({
// //           username: ['',Validators.required,Validators.minLength(5)],
// //           password: ['',Validators.required,Validators.minLength(5)],
// //       })
// //   }

// //   login(){
// //       this.appService.authenticate(this.credentials, ()=>{
// //           this.router.navigateByUrl('/home');
// //       });{

// //       }
  
}
