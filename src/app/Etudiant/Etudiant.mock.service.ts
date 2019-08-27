import { etudiant} from "../shared/Etudiant";
import { Injectable } from "@angular/core";

@Injectable()
export class EtudiantMockService{

    private Etudaints: etudiant[]=[];
    constructor(){
        let e1: etudiant = new etudiant(1,'John','CENA','Montfleurie',607080988,'img.jpg','10/05/1998','19/08/2019',2000,'Mai');
        let e2: etudiant = new etudiant(2,"Will","Smith","Narjiss",608080988,"img1.jpeg","20/05/1998","12/08/2019",3000,"Janvier");
        let e3: etudiant = new etudiant(3,"Toni","Falana","Saada",607080918,"img2.jpg","05/01/1998","05/08/2019",4000,"Fevrier");
        let e4: etudiant = new etudiant(4,"Joan","Arthur","Rabat",607060988,"img3.jpg","10/02/1997","15/08/2018",7000,"Septembre");
        this.Etudaints.push(e1);
        this.Etudaints.push(e2);
        this.Etudaints.push(e3);
        this.Etudaints.push(e4);
    }

    public getFormation():etudiant[]{
        return this.Etudaints;
    }
}