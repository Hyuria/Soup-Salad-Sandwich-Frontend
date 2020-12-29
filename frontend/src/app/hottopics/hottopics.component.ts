import { Component, OnInit } from '@angular/core';
import { Dish } from '../models/dish';
import { User } from '../models/user';

@Component({
  selector: 'app-hottopics',
  templateUrl: './hottopics.component.html',
  styleUrls: ['./hottopics.component.css']
})
export class HottopicsComponent implements OnInit {
   loggedUser: User;
   hotDishes: Dish[];

   constructor(private userService: UserService, private dishService: DishService) { }

   ngOnInit(): void {
      this.userService.loginUser(null,null).subscribe(
         resp => {
            this.loggedUser = resp;
         }
      );
      this.dishService.getHotDishes().subscribe(
         resp => {
            this.hotDishes = resp;
         }
      );
   }
}
