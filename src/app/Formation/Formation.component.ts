import { Component,OnInit } from "@angular/core";
import { FormGroup,FormBuilder,Validators} from "@angular/forms";
import { FormationMockService } from './Formation.mock.service';
import { formation } from '../shared/formation';

@Component({
    selector:'app-formation',
    templateUrl:'./Formation.component.html',
    styleUrls:['./Formation.component.css']
})
export class FormationComponent implements OnInit{

Formations: formation[];
formationForm:FormGroup;
  constructor(private formationService: FormationMockService, private fb: FormBuilder) {
      this.formationForm=this.fb.group({
      nom:['',Validators.required],
      type: '',
      dure:'',
      datedeb:'',
 
      });
       }
  ngOnInit(){
      this.Formations=this.formationService.getFormation();
  }

}