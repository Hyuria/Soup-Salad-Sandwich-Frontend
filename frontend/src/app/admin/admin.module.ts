import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdddishComponent } from './adddish/adddish.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdddishComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  bootstrap: [AdddishComponent]
})
export class AdminModule { }
