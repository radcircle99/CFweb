import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

@Input()
showSideBar:boolean=false;

  @Output()
  showSideBarChange: EventEmitter<boolean>= new EventEmitter<boolean>();
  
  info: any;
 
  constructor(private token: TokenStorageService) { }
 
  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }
 
  logout() {
    this.token.signOut();
    window.location.reload();
  }

  
}
