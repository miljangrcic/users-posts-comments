import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users : User[] = [];
  @Output() onSelect = new EventEmitter<User>();

  constructor(private userService : UsersService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    })
  }

}
