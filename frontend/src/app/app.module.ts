import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DishpageComponent } from './dishpage/dishpage.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { MenuComponent } from './menu/menu.component';
import { ChoppingblockComponent } from './choppingblock/choppingblock.component';
import { HottopicsComponent } from './hottopics/hottopics.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecentlyaddedrowComponent } from './recentlyaddedrow/recentlyaddedrow.component';
import { CommentComponent } from './comment/comment.component';
import { MenuitemComponent } from './menuitem/menuitem.component';
import { SoupmenuComponent } from './soupmenu/soupmenu.component';
import { SaladmenuComponent } from './saladmenu/saladmenu.component';
import { SandwichmenuComponent } from './sandwichmenu/sandwichmenu.component';
import { DishimageComponent } from './dishimage/dishimage.component';
import { AdminModule } from './admin/admin.module';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { UrlService } from './url.service';
import { MycommentsComponent } from './mycomments/mycomments.component';
import { ViewcommentsComponent } from './viewcomments/viewcomments.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DishpageComponent,
    MenuComponent,
    ChoppingblockComponent,
    HottopicsComponent,
    LoginComponent,
    RegisterComponent,
    RecentlyaddedrowComponent,
    CommentComponent,
    MenuitemComponent,
    SoupmenuComponent,
    SaladmenuComponent,
    SandwichmenuComponent,
    DishimageComponent,
    HomeComponent,
    ManageuserComponent,
    MycommentsComponent,
    ViewcommentsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService,
    UrlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
