import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
 
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

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
