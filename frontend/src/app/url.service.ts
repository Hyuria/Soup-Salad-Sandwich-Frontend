import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { 
  }
  
  getUrl(): string {
    return 'http://localhost:8080/Soup-Salad-Sandwich/';
    // return 'http://localhost:8080/Soup_Salad_Sandwich_war_exploded/';
  }
}
