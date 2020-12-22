import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-mycomments',
  templateUrl: './mycomments.component.html',
  styleUrls: ['./mycomments.component.css']
})
export class MycommentsComponent implements OnInit {
  loggedUser: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.loginUser(null,null).subscribe(
      resp => {
        this.loggedUser = resp;
      }
    );
  }

}
