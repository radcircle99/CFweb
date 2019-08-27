import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormationComponent } from './Formation/Formation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EtudiantComponent } from './Etudiant/Etudiant.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ChargeComponent } from './charge/charge.component';
import { ProfesseurComponent } from './professeur/professeur.component';

export const appRoutes:Routes =[
    {path: 'login',component:LoginComponent},
    {path: 'home', component:HomeComponent},
    {path: 'Formation',component:FormationComponent},
    {path: 'dashboard',component:DashboardComponent},
    {path: 'Etudiant',component:EtudiantComponent},
     {path: 'charge',component:ChargeComponent},
      {path: 'professeur',component:ProfesseurComponent},
    {path: '',redirectTo:'/home',pathMatch: 'full'}
    
];

@NgModule({
    imports:[
    
        RouterModule.forRoot(
            appRoutes,
            {enableTracing:false}
)

    ],
    exports:[RouterModule]
        
})
export class AppRoutingModule{

}