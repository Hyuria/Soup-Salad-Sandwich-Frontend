import { Component, OnInit } from '@angular/core';
import { Dish } from '../models/dish';

@Component({
  selector: 'app-saladmenu',
  templateUrl: './saladmenu.component.html',
  styleUrls: ['./saladmenu.component.css']
})
export class SaladmenuComponent implements OnInit {

  salad:Dish;
  constructor() { }

  ngOnInit(): void {
  }

}
