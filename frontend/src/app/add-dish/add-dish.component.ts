import { Component, OnInit } from '@angular/core';
import { Dish } from '../models/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {

   dishObj:Dish
   dishName: string

  constructor(private dishService:DishService) { }

  ngOnInit(): void {
    this.dishObj = new Dish();
  }

   

  addDish(){
    console.log("made it to ts method");
    this.dishObj.name=this.dishName;
    this.dishService.addDish(this.dishObj).subscribe();
  }

}
