import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { FormationComponent } from "./Formation/Formation.component";
import { FormationMockService } from './Formation/Formation.mock.service';
import { EtudiantComponent } from "./Etudiant/Etudiant.component";
import { EtudiantMockService } from "./Etudiant/Etudiant.mock.service";
import { NavbarComponent } from './navbar/navbar.component';

import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from "./app.routing.module";


@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    FormationComponent,
    NavbarComponent,
    ContentComponent,
    SidebarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,ReactiveFormsModule
  ],
  providers: [FormationMockService,EtudiantMockService],
  bootstrap: [AppComponent]
  


})
export class AppModule { }
