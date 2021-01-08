import { UrlService } from './../url.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
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
  usersUrl: string;
  selectedFile: File = null; 

  message: string;
  imageName: any; 
  retrievedImage: any;
  base64Data: any;

  onFileSelected(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile)
    // need to revise the post url. Can use this.selectedFile.name rather than fd if the back end accepts binary rather than form data
    this.http.post(this.usersUrl + this.loggedUser.id + "/image", fd, {withCredentials: true})
    .subscribe(res => {  
        let success = res['success']
        if(true == success){
          this.setImage(res)
        }
    })
  }

   getImage() {
    //Make a call to Spring to get the Image Bytes.]
    this.http.get(this.usersUrl + 'download/' + this.loggedUser.id, {withCredentials: true})
      .subscribe(
        res => {
          if(res['image']){
            this.setImage(res)
          }
        }
      );
  }

  setImage(res: any){
      this.retrievedImage = res['image'];
      this.base64Data = this.retrievedImage;
      this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
  }

  constructor(private userService: UserService, private urlService: UrlService, private router: Router, private cookieService: CookieService, private http: HttpClient) { 
    this.usersUrl = this.urlService.getUrl() + 'users/';
  }

  ngOnInit(): void {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    this.cookieService.set('Cookie', JSON.parse(localStorage.getItem('user')).userName);
    this.cookieService.get('Cookie');
    this.getImage()
    console.log(this.loggedUser);
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
