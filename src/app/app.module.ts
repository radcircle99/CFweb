import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
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
import { AppService } from "./app.service";
import { ChargeComponent } from './charge/charge.component';
import { ProfesseurComponent } from './professeur/professeur.component';
import { FormationService } from './Formation/formation.service';
import { chargeService } from './charge/charge.service';
import { ProfesseurService } from './professeur/professeur.service';


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

  ],
  imports: [
    BrowserModule,AppRoutingModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [FormationService,
             EtudiantMockService,
             EtudiantService,
             chargeService,
             ProfesseurService,
             AppService        ],
  bootstrap: [AppComponent]
  


})
export class AppModule { }
