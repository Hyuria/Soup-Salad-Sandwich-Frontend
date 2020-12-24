import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'manage',
    component: ManageuserComponent
  },
  {
    path: 'mydishes',
    component: MenuComponent
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
