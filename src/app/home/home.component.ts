import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { AppComponent } from "../app.component";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 showHideSideBar: boolean = false;
  constructor() { }

   onshowSideBarChange(showHideSideBar){
      this.showHideSideBar =showHideSideBar;
  }
  ngOnInit() {
  }

}
