import { Injectable } from '@angular/core';

// sample model. Of course this can/should be in its own file
export interface User {
  name: string;
  email: string;
}

// our shared service in the library
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  // list of static users, but you can do anything
  // here. Call API's, use @ngrx/store, and so on.
  users: User[] = [
    {name: 'Peter', email: 'test@test.com'},
    {name: 'Sandra', email: 'sandra@sandra.com'}
  ];

  getUsers() {
    return this.users;
  }
}
