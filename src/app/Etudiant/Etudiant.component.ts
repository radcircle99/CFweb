import { Component,OnInit } from "@angular/core";
import { FormGroup,FormBuilder,Validators} from "@angular/forms";
import { EtudiantMockService } from './Etudiant.mock.service';
import { etudiant } from '../shared/Etudiant';

@Component({
    selector:'app-etudiant',
    templateUrl:'./Etudiant.component.html',
    styleUrls:['./Etudiant.component.css']
})
export class EtudiantComponent implements OnInit{

Etudiants: etudiant[];
EtudiantForm:FormGroup;
  constructor(private etudiantService: EtudiantMockService, private fb: FormBuilder) {
      this.EtudiantForm=this.fb.group({
      nom:['',Validators.required],
      prenom:'',
      photoEtud:'',
      datenais:'',
      dateinsc:'',
      montant :'',
      dernmoipay:'',
      adress:'',
      telper:'',
 
      });
       }
  ngOnInit(){
      this.Etudiants=this.etudiantService.getFormation();
      }

}