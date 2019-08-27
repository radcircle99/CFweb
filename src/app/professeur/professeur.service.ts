import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from "../config/api.url.config";
import { professeur } from "../shared/Professeur";

@Injectable()
export class ProfesseurService{

    constructor(private http:HttpClient){

    }
    getProf():Observable<any>{
        return this.http.get(API_URLS.PROF_URL);

    }

    addProf(Prof:professeur):Observable<any> {
            return this.http.post(API_URLS.PROF_URL,Prof);
    }

    updateProf(Prof:professeur):Observable<any> {
        return this.http.put(API_URLS.PROF_URL ,Prof);
    }

      deleteProf(idProf:number):Observable<any> {
        return this.http.delete(API_URLS.PROF_URL +'/'+idProf);
    }
}