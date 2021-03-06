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
    return this.http.get(this.dishUrl + "/recent", {withCredentials:true}).pipe(
      map(resp => resp as Dish[])
    );
  }

  getHotDishes(): Observable<Dish[]>{
    return this.http.get(this.dishUrl + "/hot", {withCredentials:true}).pipe(
       map(resp => resp as Dish[])
    );
  }

  addDish(dishObj:Dish): Observable<Dish>{
    console.log ("made it to dishservice method");
    return this.http.post(this.dishUrl, dishObj, {withCredentials:true}).pipe(
      map(resp => resp as Dish)
    ); 
  }

  updateDish(dishObj:Dish): Observable<Object>{
  	  console.log(dishObj);
  	  return this.http.put(this.dishUrl + "/" + dishObj.id, dishObj, {withCredentials:true});
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
  
  getUndecidedDishes(): Observable<Dish[]> {
    return this.http.get(this.dishUrl +"/category"+ "/undecided", {withCredentials:true}).pipe(
      map(resp => resp as Dish[])
    );
  }

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

  addVoteByDishId(id: String, categoryId: String, userId: String): Observable<Object>{
    console.log("Adding Vote By Dish Id");
    let url = this.dishUrl + "/" + id + "/vote/" + categoryId + "/user/" + userId;
    console.log(url);
    return this.http.post(url, {withCredentials:true});
  }

  getCommentByDishId(id: String): Observable<Comment[]> {
    console.log("Getting Comment by Dish ID: " + id);
    return this.http.get(this.dishUrl + "/" + id + "/comment", {withCredentials:true}).pipe(
      map(resp => resp as Comment[])
    );
  }

  postCommentByDishId(id: String, message: String, userId): Observable<Object>{
    let url = this.dishUrl + "/" + id + "/comment/" + userId;
    console.log(url);
    return this.http.post(url, message, {withCredentials: true});
  }

  getLikeByDishId(id: String): Observable<Like[]> {
    console.log("Getting Like by Dish ID: " + id);
    return this.http.get(this.dishUrl + "/" + id + "/like", {withCredentials:true}).pipe(
      map(resp => resp as Like[])
    );
  }

  getPendingDishes(): Observable<Dish[]>{
    return this.http.get(this.dishUrl + "/pending", {withCredentials:true}).pipe(
       map(resp => resp as Dish[])
    );
  }

  addLike(dishId:Number, commentId: Number, userId:Number ): Observable<Object>{
    console.log("Adding like to comment");
    let url = this.dishUrl + "/comment/" + commentId + "/like/" + userId;
    console.log(url);
    return this.http.post(url,{withCredentials:true});
  }

  addDisLike(dishId:Number, commentId: Number, userId:Number ): Observable<Object>{
    console.log("Adding dislike to comment");
    let url = this.dishUrl + "/comment/" + commentId + "/like/" + userId;
    console.log(url);
    return this.http.delete(url,{withCredentials:true});
  }

}
