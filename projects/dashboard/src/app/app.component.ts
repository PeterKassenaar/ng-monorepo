import {Component, OnInit} from '@angular/core';
import {User, UserService} from 'shared-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dashboard';
  users: User[];
  configName: string; // The (optional) string that was passed in as a configuration parameter for our service.

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.configName = this.userService.getConfigName();
  }
}
