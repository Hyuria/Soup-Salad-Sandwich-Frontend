import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdddishComponent } from './adddish/adddish.component';
import { FormsModule } from '@angular/forms';
import { AddcommentComponent } from './addcomment/addcomment.component';


@NgModule({
  declarations: [AdddishComponent, AddcommentComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  bootstrap: [AdddishComponent]
})
export class AdminModule { }
