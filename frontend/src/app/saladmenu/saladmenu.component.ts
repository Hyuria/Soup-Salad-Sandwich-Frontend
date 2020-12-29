import { Component, OnInit } from '@angular/core';
import { Dish } from '../models/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-saladmenu',
  templateUrl: './saladmenu.component.html',
  styleUrls: ['./saladmenu.component.css']
})
export class SaladmenuComponent implements OnInit {

  salad:Dish[];
  constructor(private dishService:DishService) { }

  ngOnInit(): void {
    this.dishService.getSaladDishes().subscribe(resp=>{this.salad = resp;})
  }

}
