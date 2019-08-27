import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from "@angular/forms";
import { AppService } from "../app.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


loginForm:FormGroup;

credentials={
    username:'',
    password:'',
}
  constructor(private fb: FormBuilder,
              private appService:AppService,
              private router :Router) { }

  ngOnInit() {
      this.loginForm=this.fb.group({
          username: ['',Validators.required,Validators.minLength(5)],
          password: ['',Validators.required,Validators.minLength(5)],
      })
  }

  login(){
      this.appService.authenticate(this.credentials, ()=>{
          this.router.navigateByUrl('/home');
      });{

      }
  }
}
