import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user : User = null;
  showTable = true;

  selectUser(user: User) {
    this.user = user;
    this.showTable = false;
  }
}
