import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(/*private http: HttpClient*/) { }

  /*getUsers() {
    this.http.get('assets/data/user.json').subscribe(data => {
      console.log(data);
    });
    return this.http.get('assets/data/user.json').subscribe(data => data);
  }*/

  getUsers() {
    return fetch('assets/data/user.json').then(response => response.json())
  }

}
