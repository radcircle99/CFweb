import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from "../config/api.url.config";
import { formation } from "../shared/formation";

@Injectable()
export class FormationService{

    constructor(private http:HttpClient){

    }
    getFormations():Observable<any>{
        return this.http.get(API_URLS.FORMATIONS_URL);

    }

    addFormations(Formation:formation):Observable<any> {
            return this.http.post(API_URLS.FORMATIONS_URL,Formation);
    }

    updateFormations(Formation:formation):Observable<any> {
        return this.http.put(API_URLS.FORMATIONS_URL ,Formation);
    }

      deleteFormations(idForm:number):Observable<any> {
        return this.http.delete(API_URLS.FORMATIONS_URL +'/'+idForm);
    }
}