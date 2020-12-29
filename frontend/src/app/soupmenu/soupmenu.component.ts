import { Component, OnInit } from '@angular/core';
import { Dish } from '../models/dish';

@Component({
  selector: 'app-soupmenu',
  templateUrl: './soupmenu.component.html',
  styleUrls: ['./soupmenu.component.css']
})
export class SoupmenuComponent implements OnInit {

  soup:Dish;

  constructor() { }

  ngOnInit(): void {
  }

}
