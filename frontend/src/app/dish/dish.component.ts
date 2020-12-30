import { UserService } from './../services/user.service';
import { User } from './../models/user';
import { DishService } from './../services/dish.service';
import { Like } from './../models/like';
import { Dish } from './../models/dish';
import { Comment } from './../models/comment';
import { Router } from '@angular/router';
import { Vote } from './../models/vote';
import { Component, OnInit } from '@angular/core';

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
  soupVoteCount: Number;
  saladVoteCount: Number;
  sandwichVoteCount : Number;

  commentArr: Comment[];
  likeArr: Like[];

  constructor(private router: Router, private dishService: DishService, private userService: UserService) { }

  ngOnInit(): void {
    //this.loggedUser = this.userService.getLoggedUser();
    this.loggedUser = JSON.parse(localStorage.getItem('user')).userName;
    this.inputDishID = window.history.state.inputDish;
    this.getAllData();
  }

  getAllData(){
    this.dishService.getDishById(this.inputDishID).subscribe(
      resp => {
        this.dish = resp;
        console.log("Loaded Dish: " + this.dish);
      }
    );
    this.dishService.getVoteByDishId(this.inputDishID).subscribe(
      resp => {
        this.voteArr = resp;
        console.log("Loaded Votes: " + this.voteArr);
      }
    );
    this.dishService.getCommentByDishId(this.inputDishID).subscribe(
      resp => {
        this.commentArr = resp;
        console.log("Loaded Comments: " + this.commentArr);
      }
    );
    this.dishService.getLikeByDishId(this.inputDishID).subscribe(
      resp => {
        this.likeArr = resp;
        console.log("Loaded Likes: " + this.likeArr);
      }
    );
  }

  getVoteCount(){
    for (let v of this.voteArr){
      if (v.category.id == 1){
        
      }
    }
  }
}
