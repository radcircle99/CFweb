import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from "../config/api.url.config";
import { etudiant } from "../shared/Etudiant";

@Injectable()
export class EtudiantService{

    constructor(private http:HttpClient){

    }
    getEtudiants():Observable<any>{
        return this.http.get(API_URLS.ETUDIANTS_URL);

    }

    addEtudiants(Etudiant:etudiant):Observable<any> {
            return this.http.post(API_URLS.ETUDIANTS_URL,Etudiant);
    }

    updateEtudiant(Etudiant:etudiant):Observable<any> {
        return this.http.put(API_URLS.ETUDIANTS_URL ,Etudiant);
    }

      deleteEtudiant(idPer:number):Observable<any> {
        return this.http.delete(API_URLS.ETUDIANTS_URL +'/'+idPer);
    }
}