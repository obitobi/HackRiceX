import { Component, OnInit } from '@angular/core';
import {UserModel} from './user.model';
import {UserService} from './user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: UserModel[];
  constructor(private userService: UserService) { }
  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }
  test(): void {
    const user: UserModel = new UserModel();
    user.email = 'ddddsfe@gadxxs.ru';
    user.password = 'asdsad';
    const myUser = JSON.stringify(`{\"user\": ${JSON.stringify(user)}}`);
    const s = '{"user": {"email":"ddsdd@gadss.ru","password":"asdsad"}}';
    console.log(myUser);
    this.userService.createUser(myUser).subscribe();
  }
}
