import { Component,OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators} from "@angular/forms";
import { EtudiantService } from './etudiant.service';
import { etudiant } from '../shared/Etudiant';

@Component({
    selector: 'app-etudiant',
    templateUrl: './Etudiant.component.html',
    styleUrls: ['./Etudiant.component.css']
})
export class EtudiantComponent implements OnInit{
showHideSideBar: boolean = false;
Etudiants: etudiant[];
EtudiantForm: FormGroup;

operation : string='add';

selectedEtudiant: etudiant;

  constructor(private etudiantService: EtudiantService, private fb: FormBuilder) {
    this.createForm();
       }
              onshowSideBarChange(showHideSideBar){
      this.showHideSideBar =showHideSideBar;
  }
  ngOnInit(){
      this.initEtudiant();
      this.loadEtudiants();
      }

      createForm(){
                this.EtudiantForm = this.fb.group({
      idPer:'',
      nomPer: ['', Validators.required],
      prenomPer: '',
       adressePer: '',
      telPer: '',
       photoEtud: '',
      dateNaissance: '',
      dateInscription: '',
      montantPayer : '',
      dernierMoisPayer: '',
      });
      }

      loadEtudiants(){
          this.etudiantService.getEtudiants().subscribe(
              data => {this.Etudiants = data},
              error => {console.log('An error was occured.')},
              () => {console.log('loading etudiants was done.')}
          );

          
      }
      addEtudiant(){
          const p=this.EtudiantForm.value;
          this.etudiantService.addEtudiants(p).subscribe(
              res => {
                  this.initEtudiant();
                  this.loadEtudiants();
              }
          );
      }

      updateEtudiant(){
            const nn=this.EtudiantForm.value;
            nn.idPer = this.selectedEtudiant.idPer;
            this.etudiantService.updateEtudiant(nn).subscribe(
              res => {
                  this.initEtudiant();
                  this.loadEtudiants();
              }
          );
      }

      initEtudiant(){
          this.selectedEtudiant = new etudiant();
          this.createForm();
      }
      deleteEtudiant(){
            this.etudiantService.deleteEtudiant(this.selectedEtudiant.idPer).subscribe(
              res => {
                  this.selectedEtudiant=new etudiant();
                  this.loadEtudiants();
              }
            );
      }

}