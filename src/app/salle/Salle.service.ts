import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from "../config/api.url.config";

import { salle } from '../shared/Salle';

@Injectable()
export class SalleService{

    constructor(private http:HttpClient){

    }
    getSalles():Observable<any>{
        return this.http.get(API_URLS.SALLE_URL);

    }

    addSalles(Salle:salle):Observable<any> {
            return this.http.post(API_URLS.SALLE_URL,Salle);
    }

    updateSalles(Salle:salle):Observable<any> {
        return this.http.put(API_URLS.SALLE_URL,Salle);
    }

      deleteSalles(idForm:number):Observable<any> {
        return this.http.delete(API_URLS.SALLE_URL +'/'+idForm);
    }
}