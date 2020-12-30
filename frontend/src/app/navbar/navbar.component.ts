import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {

  @Output() logInEvent: EventEmitter<any> = new EventEmitter();
  loggedUser: User;
  user: string;
  pass: string;

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('user') != null) {
      this.loggedUser = JSON.parse(localStorage.getItem('user'));
    }
  }

  ngOnChanges() {
    console.log(this.user + ' ' + this.pass);
  }

  getLoggedInUser() { 
    console.log('Get logged in user');
    this.loggedUser = this.userService.getLoggedUser();
  }

  logIn() {
    console.log("Logging in with: " + this.user + ' ' + this.pass);
    this.userService.loginUser(this.user, this.pass).subscribe(
      resp => {
        this.loggedUser = resp;
        localStorage.setItem('user', JSON.stringify(resp));
        console.log("this user is ", localStorage.getItem('user'));
        this.logInEvent.emit();
      }
    );
  }

  logOut() {
    this.userService.logoutUser().subscribe(
      resp => {
        this.loggedUser = null;
        localStorage.removeItem('user');
        this.router.navigate(['home']);
      }
    );
  }
}

