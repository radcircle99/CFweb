import { Component,OnInit } from "@angular/core";
import { FormGroup,FormBuilder,Validators} from "@angular/forms";
import { chargeService } from './charge.service';
import { charge } from '../shared/Charge';

@Component({
  selector: 'app-charge',
  templateUrl: './charge.component.html',
  styleUrls: ['./charge.component.css']
})
export class ChargeComponent implements OnInit {
 showHideSideBar: boolean = false;
Charge: charge[];
chargeForm:FormGroup;

operation : string='add';

selectedCharge: charge;

        onshowSideBarChange(showHideSideBar){
      this.showHideSideBar =showHideSideBar;
  }

  constructor(private chargeService: chargeService , private fb: FormBuilder) {
     this.createForm();
       }
 

    createForm(){
         this.chargeForm=this.fb.group({
      idCharge:'',
      nomCharge:['',Validators.required],
      typeCharge: '',
      dateCharge:'',
      montantCharge:'',
     });
    }

  ngOnInit(){
      this.initCharge();
      this.loadCharge();
  }
         loadCharge(){
          this.chargeService.getCharges().subscribe(
              data => {this.Charge = data},
              error => {console.log('An error was occured.')},
              () => {console.log('loading charge was done.')}
          );

          
      }
      addCharge(){
          const p=this.chargeForm.value;
          this.chargeService.addCharges(p).subscribe(
              res => {
                    this.initCharge();
                     this.loadCharge();
              }
          );
      }

      updateCharge(){
            const nn=this.chargeForm.value;
            nn.idCharge = this.selectedCharge.idCharge;
            this.chargeService.updateCharge(nn).subscribe(
              res => {
                     this.initCharge();
                     this.loadCharge();
              }
          );
      }

      initCharge(){
          this.selectedCharge = new charge();
          this.createForm();
      }
      deleteCharge(){
            this.chargeService.deleteCharge(this.selectedCharge.idCharge).subscribe(
              res => {
                  this.selectedCharge=new charge();
                  this.loadCharge();
              }
            );
      }

}
