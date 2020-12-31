import { Component, OnInit } from '@angular/core';
import { Dish } from '../models/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-underdebate',
  templateUrl: './underdebate.component.html',
  styleUrls: ['./underdebate.component.css']
})
export class UnderdebateComponent implements OnInit {
  public debatedDishes:Dish[];
  

  constructor(private dishService:DishService) {
    
   }

  ngOnInit(): void {
    this.dishService.getUndecidedDishes().subscribe(
      resp=>{
        this.debatedDishes = resp;
      }
    )
  }

}
