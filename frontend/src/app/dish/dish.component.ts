import { UserService } from './../services/user.service';
import { User } from './../models/user';
import { DishService } from './../services/dish.service';
import { Like } from './../models/like';
import { Dish } from './../models/dish';
import { Comment } from './../models/comment';
import { Router } from '@angular/router';
import { Vote } from './../models/vote';
import { Component, OnInit } from '@angular/core';
import { ɵELEMENT_PROBE_PROVIDERS__POST_R3__ } from '@angular/platform-browser';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})

export class DishComponent implements OnInit {
  loggedUser: User;
  inputDishID = '';
  dish : Dish;
  voteArr: Vote[];
  soupVoteCount = 0;
  saladVoteCount = 0;
  sandwichVoteCount = 0;

  commentArr: Comment[];
  likeArr: Like[];

  constructor(private router: Router, private dishService: DishService, private userService: UserService) { }

  ngOnInit(): void {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    this.inputDishID = window.history.state.inputDish;
    if (this.inputDishID == undefined){
      this.inputDishID = localStorage.getItem('dishID');
    }else{
      localStorage.setItem('dishID', this.inputDishID);
    }
    
    this.dishService.getDishById(this.inputDishID).subscribe(
      resp => {
        this.dish = resp;
        //console.log("Loaded Dish: " + this.dish);
        this.refreshInformation();
      }
    );
  }

  refreshInformation(){
    this.dishService.getVoteByDishId(this.inputDishID).subscribe(
      resp => {
        this.voteArr = resp;
        //console.log("Loaded Votes: " + this.voteArr);
        this.getVoteCount();
      }
    );
    this.dishService.getCommentByDishId(this.inputDishID).subscribe(
      resp => {
        this.commentArr = resp;
        //console.log("Loaded Comments: " + this.commentArr);
      }
    );
    this.dishService.getLikeByDishId(this.inputDishID).subscribe(
      resp => {
        this.likeArr = resp;
        //console.log("Loaded Likes: " + this.likeArr);
      }
    );
  }

  getVoteCount(){
    this.soupVoteCount = 0;
    this.saladVoteCount = 0;
    this.sandwichVoteCount = 0;
    for (let v of this.voteArr){
      //console.log(v);
      if (v.category.id == 1){
        //console.log("+1 for Soup");
        this.soupVoteCount ++;
      }else if (v.category.id == 2){
        //console.log("+1 for Salad");
        this.saladVoteCount ++;
      }
      else if(v.category.id == 3){
        //console.log("+1 for Sandwich");
        this.sandwichVoteCount ++;
      }
      //console.log("soup count: " + this.soupVoteCount);
    }
  }

  likeComment(commentId: Number){
    this.dishService.addLike(this.dish.id, commentId, this.loggedUser.id).subscribe(
      resp=>{
        this.refreshInformation();
      }
    );
  }

  dislikeComment(commentId: Number){
    this.dishService.addDisLike(this.dish.id, commentId, this.loggedUser.id).subscribe(
      resp=>{
        this.refreshInformation();
      }
    );
  }

  vote(category:String){
    switch(category) { 
      case "soup": { 
         this.dishService.addVoteByDishId(String(this.dish.id), "1", String(this.loggedUser.id)).subscribe(
          resp=>{
            this.refreshInformation();
          }
         );
         break; 
      } 
      case "salad": { 
        this.dishService.addVoteByDishId(String(this.dish.id), "2", String(this.loggedUser.id)).subscribe(
          resp=>{
            this.refreshInformation();
          }
         );
         break; 
      } 
      case "sandwich": { 
        this.dishService.addVoteByDishId(String(this.dish.id), "3", String(this.loggedUser.id)).subscribe(
          resp=>{
            this.refreshInformation();
          }
         );
        break; 
     } 
      default: { 
         break; 
      } 
   } 
  }
}
