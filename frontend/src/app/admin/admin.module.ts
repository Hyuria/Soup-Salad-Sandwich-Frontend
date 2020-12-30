import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddcommentComponent } from '../addcomment/addcomment.component';
import { FormsModule } from '@angular/forms';
import { PendingdishesComponent } from './pendingdishes/pendingdishes.component';



@NgModule({
  declarations: [AddcommentComponent, PendingdishesComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  bootstrap: [AddcommentComponent, PendingdishesComponent]
})
export class AdminModule { }
