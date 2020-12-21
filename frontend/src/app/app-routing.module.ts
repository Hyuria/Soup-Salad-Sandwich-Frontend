import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { ManageuserComponent } from './manageuser/manageuser.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'manage',
    component: ManageuserComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
