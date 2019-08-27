import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from "../config/api.url.config";
import { charge } from "../shared/Charge";

@Injectable()
export class chargeService{

    constructor(private http:HttpClient){

    }
    getCharges():Observable<any>{
        return this.http.get(API_URLS.CHARGES_URL);

    }

    addCharges(Charge:charge):Observable<any> {
            return this.http.post(API_URLS.CHARGES_URL,Charge);
    }

    updateCharge(Charge:charge):Observable<any> {
        return this.http.put(API_URLS.CHARGES_URL,Charge);
    }

      deleteCharge(idCharge:number):Observable<any> {
        return this.http.delete(API_URLS.CHARGES_URL +'/'+idCharge);
    }
}