import { Component, OnInit } from '@angular/core';
import { DishService } from './../services/dish.service';
import { UserService } from './../services/user.service';
import { Status } from '../models/status';
import { Dish } from '../models/dish';

@Component({
  selector: 'app-pendingdishes',
  templateUrl: './pendingdishes.component.html',
  styleUrls: ['./pendingdishes.component.css']
})
export class PendingdishesComponent implements OnInit {

  pendingDishes: Dish[]
	dishObj:Dish
  //private approved:Status
  //approved.id = 2;
  //private rejected:Status
  //rejected.id = 0;

  constructor(private dishService: DishService, private userService: UserService) { }

  ngOnInit(): void {
  	 this.dishService.getPendingDishes().subscribe(
  	 	 resp => {
  	 	 	 this.pendingDishes = resp;
  	 	 }
  	 );
  }

  approveDish(){
  	  console.log("Approving: ");
  	  this.dishObj;
  }
  
  rejectDish(){
  	  console.log("Rejecting: ");

  }

}
