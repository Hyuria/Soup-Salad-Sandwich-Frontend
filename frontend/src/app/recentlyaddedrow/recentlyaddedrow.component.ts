import { DishService } from './../services/dish.service';
import { Component, OnInit } from '@angular/core';
import { Dish } from '../models/dish';

@Component({
  selector: 'app-recentlyaddedrow',
  templateUrl: './recentlyaddedrow.component.html',
  styleUrls: ['./recentlyaddedrow.component.css']
})
export class RecentlyaddedrowComponent implements OnInit {

  recentDishes: Dish[];

  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.dishService.getRecentlyAddedDishes().subscribe(
      resp => {
        this.recentDishes = resp;
      }
    );
  }

  
}
