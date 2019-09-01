// import { NgModule } from "@angular/core";
// import { RouterModule, Routes } from "@angular/router";
// import { FormationComponent } from './Formation/Formation.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { EtudiantComponent } from './Etudiant/Etudiant.component';
// import { LoginComponent } from './login/login.component';
// import { HomeComponent } from './home/home.component';
// import { ChargeComponent } from './charge/charge.component';
// import { ProfesseurComponent } from './professeur/professeur.component';
// import { SalleComponent } from './salle/salle.component';
// import { UserComponent } from './user/user.component';

// export const appRoutes:Routes =[
//     {path: 'login',component:LoginComponent},
//     {path: 'home', component:HomeComponent},
//     {path: 'Formation',component:FormationComponent},
//     {path: 'dashboard',component:DashboardComponent},
//     {path: 'Etudiant',component:EtudiantComponent},
//     {path: 'user',component:UserComponent},
    
//      {path: 'charge',component:ChargeComponent},
//      {path: 'salle',component:SalleComponent},
//       {path: 'professeur',component:ProfesseurComponent},
//     {path: '',redirectTo:'/home',pathMatch: 'full'}
    
// ];

// @NgModule({
//     imports:[
    
//         RouterModule.forRoot(
//             appRoutes,
//             {enableTracing:false}
// )

//     ],
//     exports:[RouterModule]
        
// })
// export class AppRoutingModule{

// }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { UnlockComponent } from './unlock/unlock.component';
import { FormationComponent } from './Formation/Formation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EtudiantComponent } from './Etudiant/Etudiant.component';
import { ChargeComponent } from './charge/charge.component';
import { SalleComponent } from './salle/salle.component';
import { ProfesseurComponent } from './professeur/professeur.component';
 
const routes: Routes = [
    {path: 'login',component:LoginComponent},
    {path: 'Formation',component:FormationComponent},
    {path: 'dashboard',component:DashboardComponent},
    {path: 'Etudiant',component:EtudiantComponent},
    {path: 'user',component:UserComponent},
    
      {path: 'charge',component:ChargeComponent},
      {path: 'salle',component:SalleComponent},
      {path: 'professeur',component:ProfesseurComponent},
    {
        path: 'acceuil',
        component: AcceuilComponent
    },
    {
        path: 'home', 
        component:HomeComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'pm',
        component: PmComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'auth/login',
        component: UnlockComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: 'acceuil',
        pathMatch: 'full'
    }
];
 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }