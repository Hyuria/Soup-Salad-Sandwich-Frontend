import { Component, OnInit } from '@angular/core';
import { Dish } from '../models/dish';

@Component({
  selector: 'app-sandwichmenu',
  templateUrl: './sandwichmenu.component.html',
  styleUrls: ['./sandwichmenu.component.css']
})
export class SandwichmenuComponent implements OnInit {

  sandwich:Dish;
  constructor() { }

  ngOnInit(): void {
  }

}
