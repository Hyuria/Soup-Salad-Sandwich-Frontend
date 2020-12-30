import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { Dish } from '../models/dish';
import { Status } from '../models/status';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {

   dishObj:Dish
   dishName: string
   dishpicURL:string
   categoryObj:Category
   statusObj:Status
   dishObj2:Dish

  constructor(private dishService:DishService) { }

  ngOnInit(): void {
    this.dishObj = new Dish();
    this.categoryObj = new Category();
    this.statusObj = new Status();
    this.dishObj2 = new Dish();
  }

   

  addDish(){
    console.log("made it to ts method");
    if(this.dishName!=null||this.dishName==" "){
      if(this.dishpicURL){
    this.dishObj.photo_url=this.dishpicURL;
    this.dishObj.name=this.dishName;
    this.categoryObj.id=4;
    this.statusObj.id=1;
    this.dishObj.status=this.statusObj;
    this.dishObj.category=this.categoryObj;
    this.dishService.addDish(this.dishObj).subscribe(resp=>{this.dishObj2 = resp;});
    alert(`${this.dishName} has been successfully added`);
    if(!this.dishObj2) alert("unable to add try another one");
      }else{
        alert("must have photo");
      }
    }else{
      alert("must enter something try again");
    }
  }

}
