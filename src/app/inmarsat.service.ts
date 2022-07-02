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
  proxyURL: string = "http://localhost:4200/api";

  inmarsatLogin:InmarsatLogin = new InmarsatLogin();

  constructor(private http: HttpClient) { 

  }

  sendPost(inmarsatLogin:InmarsatLogin): Observable<any> {
    const headers = { 'ClientId': this.inmarsatLogin.clientId, 'ClientSecret': this.inmarsatLogin.clientSecret };
    const body = { title: 'Angular POST Request Example' };

    // const headers = { 'content-type': 'application/json'}  
    // const body=JSON.stringify(inmarsatLogin);
    console.log(body);
    // return this.http.post(this.baseURL, body, {'headers':headers})
    return this.http.post(this.proxyURL, body, {'headers':headers});
  }
 
  authenticate() {
    this.sendPost(this.inmarsatLogin)
      .subscribe({next : data => {
        console.log(data);
        // this.refreshPeople();
      },
      error: error => {
        // this.errorMessage = error.message;
        console.error('There was an error in authentication!', error);
      }
    });
  }
}
