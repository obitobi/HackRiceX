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
    this.userService.getUsers().subscribe(users => console.log(users));
  }

  createUser() {
    const user = '{"user":{"password":"asdfsdf", "email":"asdf@asdf.com"}}';
    this.userService.createUser(user).subscribe(userr => console.log(userr));
  }
}
