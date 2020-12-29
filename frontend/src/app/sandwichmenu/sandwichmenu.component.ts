import { Component, OnInit } from '@angular/core';
import { Dish } from '../models/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-sandwichmenu',
  templateUrl: './sandwichmenu.component.html',
  styleUrls: ['./sandwichmenu.component.css']
})
export class SandwichmenuComponent implements OnInit {

  sandwich:Dish[];
  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.dishService.getSandwichDishes().subscribe(resp=>{this.sandwich = resp;})
  }
 
}
