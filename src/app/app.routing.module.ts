import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormationComponent } from './Formation/Formation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EtudiantComponent } from './Etudiant/Etudiant.component';

export const appRoutes:Routes =[
    {path: 'Formation',component:FormationComponent},
    {path: 'dashboard',component:DashboardComponent},
    {path: 'Etudiant',component:EtudiantComponent},
    {path: '',redirectTo:'/dashboard',pathMatch: 'full'}
    
];

@NgModule({
    imports:[
    
        RouterModule.forRoot(
            appRoutes,
            {enableTracing:true}
)

    ],
    exports:[RouterModule]
        
})
export class AppRoutingModule{

}