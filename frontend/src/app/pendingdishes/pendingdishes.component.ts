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
  }

  approveDish(id:Number){
  	  this.dishService.getDishById(String(id)).subscribe(
		resp => {
			this.dishObj = resp;
		  this.dishObj.status.id = 2;
		  this.dishObj.status.name = "new dish"
		  console.log("Approving: " + this.dishObj.name);
		  console.log(this.dishObj);
	 	  this.dishService.updateDish(this.dishObj).subscribe(
			resp => {alert("Approved dish");}
	 	  );
		}
  	  );
  }
  
  rejectDish(id:Number){
  	  this.dishService.getDishById(String(id)).subscribe(
		resp => {
			this.dishObj = resp;
		  this.dishObj.status.id = 0;
		  this.dishObj.status.name = "rejected"
		  console.log("Rejecting: " + this.dishObj.name);
		  console.log(this.dishObj);
	 	  this.dishService.updateDish(this.dishObj).subscribe(
			resp => {alert("Rejected dish");}
	 	  );
		}
  	  );
  }

}
