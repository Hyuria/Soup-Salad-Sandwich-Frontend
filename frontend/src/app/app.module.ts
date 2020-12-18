import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DishpageComponent } from './dishpage/dishpage.component';
import { MenuComponent } from './menu/menu.component';
import { ChoppingblockComponent } from './choppingblock/choppingblock.component';
import { HottopicsComponent } from './hottopics/hottopics.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RecentlyaddedrowComponent } from './recentlyaddedrow/recentlyaddedrow.component';
import { CommentComponent } from './comment/comment.component';
import { MenuitemComponent } from './menuitem/menuitem.component';
import { SoupmenuComponent } from './soupmenu/soupmenu.component';
import { SaladmenuComponent } from './saladmenu/saladmenu.component';
import { SandwichmenuComponent } from './sandwichmenu/sandwichmenu.component';
import { DishimageComponent } from './dishimage/dishimage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DishpageComponent,
    MenuComponent,
    ChoppingblockComponent,
    HottopicsComponent,
    LoginComponent,
    RegistrationComponent,
    RecentlyaddedrowComponent,
    CommentComponent,
    MenuitemComponent,
    SoupmenuComponent,
    SaladmenuComponent,
    SandwichmenuComponent,
    DishimageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
