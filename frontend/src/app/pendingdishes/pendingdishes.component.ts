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
	public dishObj:Dish
	private approved:Status
	private rejected:Status

  constructor(private dishService: DishService, private userService: UserService) { }

  ngOnInit(): void {
  	 this.dishService.getPendingDishes().subscribe(
  	 	 resp => {
  	 	 	 this.pendingDishes = resp;
  	 	 }
  	 );
  	 this.approved = new Status();
  	 this.rejected = new Status();
	this.rejected.id = 0;
	this.approved.id = 2;
  }

  approveDish(dishObj2:Dish){
  	  console.log("Approving: ");
  	  this.dishObj = dishObj2;
  	  this.dishObj.status = this.approved;
  	  this.dishService.updateDish(this.dishObj);
      alert("Approved dish");
  }
  
  rejectDish(dishObj2:Dish){
  	  console.log("Rejecting: ");
  	  this.dishObj;
  	  this.dishObj.status = this.rejected;
  	  this.dishService.updateDish(this.dishObj);
		alert("Rejected dish");
  }

}
