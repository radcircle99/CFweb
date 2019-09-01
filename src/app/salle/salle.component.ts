import { Component, OnInit } from '@angular/core';
import { salle } from '../shared/Salle';
import { FormGroup,FormBuilder,Validators} from "@angular/forms";
import { SalleService } from './Salle.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {

   showHideSideBar: boolean = false;
Salle: salle[];
salleForm:FormGroup;

operation : string='add';

selectedSalle: salle;

        onshowSideBarChange(showHideSideBar){
      this.showHideSideBar =showHideSideBar;
  }

  constructor(private salleService: SalleService , private fb: FormBuilder) {
     this.createForm();
       }
 

    createForm(){
         this.salleForm=this.fb.group({
      idSalle:'',
      numeroSalle:['',Validators.required],
      capaciteSalle: '',
     });
    }

  ngOnInit(){
      this.initSalle();
      this.loadSalle();
  }
         loadSalle(){
          this.salleService.getSalles().subscribe(
              data => {this.Salle = data},
              error => {console.log('An error was occured.')},
              () => {console.log('loading salle was done.')}
          );

          
      }
      addSalle(){
          const p=this.salleForm.value;
          this.salleService.addSalles(p).subscribe(
              res => {
                    this.initSalle();
                     this.loadSalle();
              }
          );
      }

      updateSalle(){
            const nn=this.salleForm.value;
            nn.idSalle = this.selectedSalle.idSalle;
            this.salleService.updateSalles(nn).subscribe(
              res => {
                     this.initSalle();
                     this.loadSalle();
              }
          );
      }

      initSalle(){
          this.selectedSalle = new salle();
          this.createForm();
      }
      deleteSalle(){
            this.salleService.deleteSalles(this.selectedSalle.idSalle).subscribe(
              res => {
                  this.selectedSalle=new salle();
                  this.loadSalle();
              }
            );
      }

}
