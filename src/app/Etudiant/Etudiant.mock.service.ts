import { etudiant} from "../shared/Etudiant";
import { Injectable } from "@angular/core";

@Injectable()
export class EtudiantMockService{

    private Etudaints: etudiant[]=[];
    constructor(){
        let e1: etudiant = new etudiant('John','CENA','img.jpg','10/05/1998','19/08/2019',2000,'Mai','Montfleurie',607080988);
        let e2: etudiant = new etudiant('Will','Smith','img1.jpeg','20/05/1998','12/08/2019',3000,'Janvier','Narjiss',608080988);
        let e3: etudiant = new etudiant('Toni','Falana','img2.jpg','05/01/1998','05/08/2019',4000,'Fevrier','Saada',607080918);
        let e4: etudiant = new etudiant('Joan','Arthur','img3.jpg','10/02/1997','15/08/2018',7000,'Septembre','Rabat',607060988);
        this.Etudaints.push(e1);
        this.Etudaints.push(e2);
        this.Etudaints.push(e3);
        this.Etudaints.push(e4);
    }

    public getFormation():etudiant[]{
        return this.Etudaints;
    }
}