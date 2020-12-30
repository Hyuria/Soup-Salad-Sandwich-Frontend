import { Component, OnInit } from '@angular/core';
import { DishService } from './../services/dish.service';
import { UserService } from './../services/user.service';
import { Dish } from '../models/dish';

@Component({
  selector: 'app-pendingdishes',
  templateUrl: './pendingdishes.component.html',
  styleUrls: ['./pendingdishes.component.css']
})
export class PendingdishesComponent implements OnInit {

  pendingDishes: Dish[];

  constructor(private dishService: DishService, private userService: UserService) { }

  ngOnInit(): void {
  	 this.dishService.getPendingDishes().subscribe(
  	 	 resp => {
  	 	 	 this.pendingDishes = resp;
  	 	 }
  	 );
  }

}
