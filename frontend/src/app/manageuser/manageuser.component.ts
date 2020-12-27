import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.css']
})
export class ManageuserComponent implements OnInit {
  loggedUser: User;
  newUsername: string;
  newPassword: string;
  newPassword2: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.loginUser(null,null).subscribe(
      resp => {
        this.loggedUser = resp;
      }
    );
  }

  updateUsername() {
    if (this.newUsername) {
      this.loggedUser.username = this.newUsername;
      this.userService.updateUser(this.loggedUser).subscribe();
    } else {
      alert('You didn\'t enter a username.');
    }
  }

  updatePassword() {
    if (this.newPassword) {
      if (this.newPassword === this.newPassword2) {
        this.loggedUser.password = this.newPassword;
        this.userService.updateUser(this.loggedUser).subscribe();
      } else {
        alert('The passwords don\'t match.');
        this.newPassword = '';
        this.newPassword2 = '';
      }
    } else {
      alert('You didn\'t enter a password.');
    }
  }



}
