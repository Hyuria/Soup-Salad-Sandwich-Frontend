import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { UrlService } from '../url.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

// added this
import { Router } from '@angular/router';

// export interface AuthResponseData {
//   idToken: string;
//   username: string;
//   refreshToken: string;
//   expiresIn: string;
//   localId: string;
//   registered?: boolean 
// }

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedUser: User;
  private usersUrl: string;
  private formHeaders = new HttpHeaders({'Cookie':this.cookieService.get('JSESSIONID'),
    'Content-Type': 'application/x-www-form-urlencoded'});
  private regHeaders = new HttpHeaders({'Cookie':this.cookieService.get('JSESSIONID'),
    'Content-Type':'application/json'})

  constructor(private http: HttpClient, private urlService: UrlService, private cookieService: CookieService, private router: Router) {
    this.usersUrl = this.urlService.getUrl() + 'users';
  }

  loginUser(username: string, password: string): Observable<User> {
    if (username && password) {
      const queryParams = `?user=${username}&pass=${password}`;
      return this.http.put(this.usersUrl + queryParams,
        {headers: this.formHeaders, withCredentials:true}).pipe(
          map(resp => resp as User)
      );
    } else {
      return this.http.get(this.usersUrl,
        {withCredentials:true}).pipe(
          map(resp => resp as User)
        );
    }
  }

  logoutUser(): Observable<object> {
    return this.http.delete(this.usersUrl, {headers:this.regHeaders, withCredentials:true}).pipe();
  }

  updateUser(updatedUser: User): Observable<object> {
    this.loggedUser = updatedUser;
    return this.http.put(this.usersUrl + this.loggedUser.id, updatedUser, 
      {headers:this.regHeaders, withCredentials:true}).pipe();
  }

  getLoggedUser(): User {
    return this.loggedUser;
  }

  registerUser(username: string, password: string): Observable<User> {
  if (username && password) {
    const queryParams = `?user=${username}&pass=${password}`;
    return this.http.post(this.usersUrl + queryParams,
      {headers: this.formHeaders, withCredentials:true}).pipe(
        map(resp => resp as User)
    );
  } else {
    return this.http.get(this.usersUrl,
      {withCredentials:true}).pipe(
        map(resp => resp as User)
      );
  }
}

}
