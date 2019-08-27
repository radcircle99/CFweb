import { Component,OnInit } from "@angular/core";
import { FormGroup,FormBuilder,Validators} from "@angular/forms";
import { FormationService } from './formation.service';
import { formation } from '../shared/formation';

@Component({
    selector:'app-formation',
    templateUrl:'./Formation.component.html',
    styleUrls:['./Formation.component.css']
})
export class FormationComponent implements OnInit{
 showHideSideBar: boolean = false;
Formations: formation[];
formationForm:FormGroup;

operation : string='add';

selectedFormation: formation;

        onshowSideBarChange(showHideSideBar){
      this.showHideSideBar =showHideSideBar;
  }

  constructor(private formationService: FormationService , private fb: FormBuilder) {
     this.createForm();
       }
 

    createForm(){
         this.formationForm=this.fb.group({
      idFomartion:'',
      nomFormation:['',Validators.required],
      typeFormation: '',
      dateDebut:'',
      dureeFomation:'',
     });
    }

  ngOnInit(){
      this.initFormation();
      this.loadFormation();
  }
         loadFormation(){
          this.formationService.getFormations().subscribe(
              data => {this.Formations = data},
              error => {console.log('An error was occured.')},
              () => {console.log('loading formation was done.')}
          );

          
      }
      addFormation(){
          const p=this.formationForm.value;
          this.formationService.addFormations(p).subscribe(
              res => {
                  this.initFormation();
                  this.loadFormation();
              }
          );
      }

      updateFormation(){
            const nn=this.formationForm.value;
            nn.idFomartion = this.selectedFormation.idFomartion
            this.formationService.updateFormations(nn).subscribe(
              res => {
                  this.initFormation();
                  this.loadFormation();
              }
          );
      }

      initFormation(){
          this.selectedFormation = new formation();
          this.createForm();
      }
      deleteFormation(){
            this.formationService.deleteFormations(this.selectedFormation.idFomartion).subscribe(
              res => {
                  this.selectedFormation=new formation();
                  this.loadFormation();
              }
            );
      }
}