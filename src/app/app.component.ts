import { Component, OnInit } from '@angular/core';

import { ApiService } from './api.service';
import { Person } from './person';

import { InmarsatService } from './inmarsat.service';
import { Inmarsat } from './inmarsat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'httpPost';
  people:Person[] = [];
  person = new Person();
  inmarsat = new Inmarsat();
  
  constructor(private apiService:ApiService, inmarsatService : InmarsatService) {

  }
 
  ngOnInit() {
    this.refreshPeople()
  }
 
  refreshPeople() {
    this.apiService.getPeople()
      .subscribe(data => {
        console.log(data)
        this.people=data;
      })      
 
  }
 
  addPerson() {
    this.apiService.addPerson(this.person)
      .subscribe(data => {
        console.log(data)
        this.refreshPeople();
      })      
  }
 
  sendRequest() {
    
  }

}
