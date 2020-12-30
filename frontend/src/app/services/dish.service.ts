import { Comment } from './../models/comment';
import { Like } from './../models/like';
import { Vote } from './../models/vote';
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


  // Chopping Block
  getRecentlyAddedDishes(): Observable<Dish[]> {
  }

  // Menu
  getSoupDishes(): Observable<Dish[]> {
    return this.http.get(this.dishUrl +"/category"+"/soup", {withCredentials:true}).pipe(
      map(resp => resp as Dish[])
    );
  }

  getSaladDishes(): Observable<Dish[]> {
    return this.http.get(this.dishUrl +"/category"+ "/salad", {withCredentials:true}).pipe(
      map(resp => resp as Dish[])
    );
  }

  getSandwichDishes(): Observable<Dish[]> {
    return this.http.get(this.dishUrl +"/category"+ "/sandwich", {withCredentials:true}).pipe(
      map(resp => resp as Dish[])
    );
  }

  getHotDishes(): Observable<Dish[]>{
       map(resp => resp as Dish[])
  // Dish Item
  getDishById(id: String): Observable<Dish> {
    console.log("Getting Dish by ID: " + id);
    return this.http.get(this.dishUrl + "/" + id, {withCredentials:true}).pipe(
      map(resp => resp as Dish)
    );
  }

  getVoteByDishId(id: String): Observable<Vote[]> {
    console.log("Getting Vote by Dish ID: " + id);
    return this.http.get(this.dishUrl + "/" + id + "/vote", {withCredentials:true}).pipe(
      map(resp => resp as Vote[])
    );
  }

  getCommentByDishId(id: String): Observable<Comment[]> {
    console.log("Getting Comment by Dish ID: " + id);
    return this.http.get(this.dishUrl + "/" + id + "/comment", {withCredentials:true}).pipe(
      map(resp => resp as Comment[])
    );
  }

  getLikeByDishId(id: String): Observable<Like[]> {
    console.log("Getting Like by Dish ID: " + id);
    return this.http.get(this.dishUrl + "/" + id + "/like", {withCredentials:true}).pipe(
      map(resp => resp as Like[])
    );
  }

}
