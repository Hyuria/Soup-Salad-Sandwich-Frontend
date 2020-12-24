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
    this.registerUser();
  }

  ngOnChanges() {
    console.log(this.user + ' ' + this.pass);
  }
  
  registerUser() {
    console.log(this.user + ' ' + this.pass);
    this.userService.registerUser(this.user, this.pass).subscribe(
      resp => {
        this.registeredUser = resp;
        this.registerUserEvent.emit();
      }
    );
  }

}
