// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit{
//   title = 'CFweb' ;
//   showHideSideBar: boolean = false;

//   constructor(private appservice: AppService,
//               private router : Router){

//   }

//   onshowSideBarChange(showHideSideBar){
//       this.showHideSideBar=showHideSideBar;
//   }

//   ngOnInit(){
//       if(!this.appservice.authenticated){
//             this.router.navigateByUrl('/login');
//       }
//       else {
//            this.router.navigateByUrl('/home');
//       }
//   }


// }
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './auth/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[];
  private authority: string;

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }
}


