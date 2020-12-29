import { Component, OnInit } from '@angular/core';
import { Dish } from '../models/dish';
import { DishService } from './../services/dish.service';

@Component({
  selector: 'app-hottopics',
  templateUrl: './hottopics.component.html',
  styleUrls: ['./hottopics.component.css']
})
export class HottopicsComponent implements OnInit {
   hotDishes: Dish[];

   constructor(private dishService: DishService) { }

   ngOnInit(): void {
      this.dishService.getHotDishes().subscribe(
         resp => {
            this.hotDishes = resp;
         }
      );
   }
}
