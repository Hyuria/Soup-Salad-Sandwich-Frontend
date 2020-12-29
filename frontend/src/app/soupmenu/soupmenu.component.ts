import { Component, OnInit } from '@angular/core';
import { Dish } from '../models/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-soupmenu',
  templateUrl: './soupmenu.component.html',
  styleUrls: ['./soupmenu.component.css']
})
export class SoupmenuComponent implements OnInit {

  soup:Dish[];

  constructor(private dishService:DishService) {
    
   }

  ngOnInit(): void {
    this.dishService.getSoupDishes().subscribe(resp=>{this.soup = resp;})
  }

}
