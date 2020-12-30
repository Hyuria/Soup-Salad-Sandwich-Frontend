import { DishComponent } from './dish/dish.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AddDishComponent } from './add-dish/add-dish.component';
import { ChoppingblockComponent } from './choppingblock/choppingblock.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import {AdminModule} from './admin/admin.module';
import {PendingdishesComponent} from './pendingdishes/pendingdishes.component';


const routes: Routes = [
  {
    path:'',
    component: ChoppingblockComponent
  },
  {
    path:'home',
    component: ChoppingblockComponent
  },
  {
    path:'chopping-block',
    component: ChoppingblockComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'manage',
    component: ManageuserComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
   {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
   {
    path: 'viewdishes',
    component: MenuComponent
  },
  {
    path: 'add-dish',
    component: AddDishComponent
  },
  {
    path: 'admin',
    component: PendingdishesComponent
  },
    {
    path: 'dish',
    component: DishComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
