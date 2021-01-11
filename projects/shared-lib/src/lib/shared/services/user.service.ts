import {Inject, Injectable} from '@angular/core';

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

  // 0. This name can be passed in as a configuration parameter.
  // It is assigned for instance as UserService.forRoot('Peter');
  configNameFromOutside: string;

  // 1. We inject the configName from the configuration property to this service.
  constructor(@Inject('configName') private configName?: string) {
    // 1a. Assign the injected value to the local value
    this.configNameFromOutside = configName;
  }

  // 2. list of static users, but you can do anything
  // here. Call API's, use @ngrx/store, and so on.
  users: User[] = [
    {name: 'Peter', email: 'test@test.com'},
    {name: 'Sandra', email: 'sandra@sandra.com'}
  ];

  // 3. Simply return our users
  getUsers() {
    return this.users;
  }

  // 4. Simply return the injected/configured name
  getConfigName() {
    return this.configNameFromOutside;
  }
}
