import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() registerUserEvent: EventEmitter<any> = new EventEmitter();
  registeredUser: User;
  user: string;
  pass: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user = '';
    this.pass = '';
    if (this.user === '' && this.pass === '') {
      localStorage.removeItem('user');
    }
    this.registerUser();
    console.log(JSON.parse(localStorage.getItem('user')).userName);
    // console.log(JSON.parse(sessionStorage.getItem('user')).userName);
  }

  
  ngOnChanges() {
    console.log(this.user + ' ' + this.pass);
  }
  
  registerUser() {
    console.log(this.user + ' ' + this.pass);
    this.userService.registerUser(this.user, this.pass).subscribe(
      resp => {
    
        console.log(`${this.user} is successfully registered`);
        let userObj = {
          userName: this.user,
          password: this.pass
        }
        // sessionStorage.setItem('user', JSON.stringify(userObj));
        localStorage.setItem('user', JSON.stringify(userObj));

        // localStorage.setItem('token', JSON.parse(resp).token);
        this.registeredUser = resp;
        this.registerUserEvent.emit();
      }
    );
  }

}

