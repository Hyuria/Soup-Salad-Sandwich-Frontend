import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
        this.router.navigate(['/chopping-block']);
      }
    );
  }

}
