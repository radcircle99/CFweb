import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AppService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CFweb' ;
  showHideSideBar: boolean = false;

  constructor(private appservice: AppService,
              private router : Router){

  }

  onshowSideBarChange(showHideSideBar){
      this.showHideSideBar=showHideSideBar;
  }

  ngOnInit(){
      if(!this.appservice.authenticated){
            this.router.navigateByUrl('/login');
      }
      else {
           this.router.navigateByUrl('/home');
      }
  }


}

