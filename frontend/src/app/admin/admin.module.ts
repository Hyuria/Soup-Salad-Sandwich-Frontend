import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddcommentComponent } from './addcomment/addcomment.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddcommentComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  bootstrap: [AddcommentComponent]
})
export class AdminModule { }
