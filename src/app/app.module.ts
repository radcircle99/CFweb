import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { FormationComponent } from "./Formation/Formation.component";

import { EtudiantComponent } from "./Etudiant/Etudiant.component";
import { EtudiantMockService } from "./Etudiant/Etudiant.mock.service";
import { NavbarComponent } from './navbar/navbar.component';

import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from "./app.routing.module";
import { EtudiantService } from "./Etudiant/etudiant.service";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { ChargeComponent } from './charge/charge.component';
import { ProfesseurComponent } from './professeur/professeur.component';
import { FormationService } from './Formation/formation.service';
import { chargeService } from './charge/charge.service';
import { ProfesseurService } from './professeur/professeur.service';
import { SalleComponent } from './salle/salle.component';
import { SalleService } from './salle/Salle.service';


import { UserComponent } from './user/user.component';
import { UnlockComponent } from './unlock/unlock.component';
import { RegisterComponent } from './register/register.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';

import { httpInterceptorProviders } from "./auth/auth-interceptor";
import { AcceuilComponent } from './acceuil/acceuil.component';


@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    FormationComponent,
    NavbarComponent,
    ContentComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    ChargeComponent,
    ProfesseurComponent,
    SalleComponent,
    UserComponent,
    UnlockComponent,
    RegisterComponent,
    PmComponent,
    AdminComponent,
    AcceuilComponent,

  ],
  imports: [
    BrowserModule,AppRoutingModule,ReactiveFormsModule,FormsModule,HttpClientModule
  ],
  providers: [FormationService,
             EtudiantMockService,
             EtudiantService,
             chargeService,
             ProfesseurService,
             SalleService,

             httpInterceptorProviders      ],
  bootstrap: [AppComponent]
  


})
export class AppModule { }
