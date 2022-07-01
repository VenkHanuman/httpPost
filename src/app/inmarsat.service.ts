import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inmarsat} from './inmarsat';
import {InmarsatLogin} from  './InmarsatLogin';

@Injectable({
  providedIn: 'root'
})
export class InmarsatService {

  baseURL: string = "https://inmarsat-prod.apigee.net/oauth/token";

  constructor(private http: HttpClient) { 

  }

  sendPost(inmarsatLogin:InmarsatLogin): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(inmarsatLogin);
    console.log(body)
    return this.http.post(this.baseURL, body, {'headers':headers})
  }
 
}
