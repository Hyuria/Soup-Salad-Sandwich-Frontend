import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ChoppingblockComponent } from './choppingblock/choppingblock.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
