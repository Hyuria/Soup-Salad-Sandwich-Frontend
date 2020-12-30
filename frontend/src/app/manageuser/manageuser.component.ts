import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
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

  seledtedFile: File = null; 

  onFileSelected(event) {
    // console.log(event);
    this.seledtedFile = <File>event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.seledtedFile, this.seledtedFile.name)
    // need to revise the post url. Can use this.selectedFile.name rather than fd if the back end accepts binary rather than form data
    this.http.post('http://localhost:8080/Soup-Salad-Sandwich/', fd)
    .subscribe(res => {
      console.log(res);
    })
  }


  constructor(private userService: UserService, private router: Router, private cookieService: CookieService, private http: HttpClient) { }

  ngOnInit(): void {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    this.cookieService.set('Cookie', JSON.parse(localStorage.getItem('user')).userName);
    this.cookieService.get('Cookie');
  }


  updateUsername() {
    if (this.newUsername) {
      console.log("update user", this.loggedUser);
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
