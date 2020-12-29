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

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loggedUser = JSON.parse(localStorage.getItem('user')).userName;
  }

  ngOnChanges() {
    console.log(this.user + ' ' + this.pass);
  }

  getLoggedInUser() { 
    console.log('Get logged in user');
    this.loggedUser = this.userService.getLoggedUser();
  }

  logIn() {
    console.log(this.user + ' ' + this.pass);
    this.userService.loginUser(this.user, this.pass).subscribe(
      resp => {
        console.log(`${this.user} is successfully logged in`);
        let userObj = {
          userName: this.user,
          password: this.pass
        }
        localStorage.setItem('user', JSON.stringify(userObj));
        this.loggedUser = JSON.parse(localStorage.getItem('user')).userName;
        console.log("this user is ", this.loggedUser)
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

