import { Dish } from './../models/dish';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../models/user';
import { UrlService } from '../url.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class DishService {
  private loggedUser: User;
  private dishUrl: string;
  private formHeaders = new HttpHeaders({'Cookie':this.cookieService.get('JSESSIONID'),
    'Content-Type': 'application/x-www-form-urlencoded'});
  private regHeaders = new HttpHeaders({'Cookie':this.cookieService.get('JSESSIONID'),
    'Content-Type':'application/json'})

  constructor(private http: HttpClient, private urlService: UrlService, private cookieService: CookieService, private router: Router) {
    this.dishUrl = this.urlService.getUrl() + 'dish';
  }

  getRecentlyAddedDishes(): Observable<Dish[]> {
      return this.http.get(this.dishUrl + "/recent", {withCredentials:true}).pipe(
        map(resp => resp as Dish[])
      );
  }

  getSoupDishes(): Observable<Dish[]> {
    return this.http.get(this.dishUrl + "/soup", {withCredentials:true}).pipe(
      map(resp => resp as Dish[])
    );
  }

  getSaladDishes(): Observable<Dish[]> {
    return this.http.get(this.dishUrl + "/salad", {withCredentials:true}).pipe(
      map(resp => resp as Dish[])
    );
  }

  getSandwichDishes(): Observable<Dish[]> {
    return this.http.get(this.dishUrl + "/sandwich", {withCredentials:true}).pipe(
      map(resp => resp as Dish[])
    );
  }

  getHotDishes(): Observable<Dish[]>{
    return this.http.get(this.dishUrl + "/hot", {withCredentials:true}).pipe(
       map(resp => resp as Dish[])
    );
  }
}
