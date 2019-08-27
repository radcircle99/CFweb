import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from "@angular/forms";
import { ProfesseurService } from './professeur.service';
import { professeur } from '../shared/Professeur';

@Component({
  selector: 'app-professeur',
  templateUrl: './professeur.component.html',
  styleUrls: ['./professeur.component.css']
})

export class ProfesseurComponent implements OnInit {
showHideSideBar: boolean = false;
Prof: professeur[];
profForm:FormGroup;

operation : string='add';

selectedProf: professeur;

        onshowSideBarChange(showHideSideBar){
      this.showHideSideBar =showHideSideBar;
  }

  constructor(private ProfService: ProfesseurService , private fb: FormBuilder) {
     this.createForm();
       }
 

    createForm(){
         this.profForm=this.fb.group({
      idPer:'',
      nomPer:'',
      prenomPer:['',Validators.required],
      adressePer: '',
      telPer:'',
      pourcentage:'',
      remun:'',
      dernierMoisRemun:'',
     });
    }

  ngOnInit(){
      this.initProf();
      this.loadProf();
  }
         loadProf(){
          this.ProfService.getProf().subscribe(
              data => {this.Prof = data},
              error => {console.log('An error was occured.')},
              () => {console.log('loading professeur was done.')}
          );

          
      }
      addProf(){
          const p=this.profForm.value;
          this.ProfService.addProf(p).subscribe(
              res => {
                  this.initProf();
                  this.loadProf();
              }
          );
      }

      updateProf(){
            const nn=this.profForm.value;
            nn.idPer = this.selectedProf.idPer
            this.ProfService.updateProf(nn).subscribe(
              res => {
                  this.initProf();
                  this.loadProf();
              }
          );
      }

      initProf(){
          this.selectedProf = new professeur();
          this.createForm();
      }
      deleteProf(){
            this.ProfService.deleteProf(this.selectedProf.idPer).subscribe(
              res => {
                  this.selectedProf=new professeur();
                  this.loadProf();
              }
            );
      }
}
