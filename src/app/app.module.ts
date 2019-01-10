import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NavBarComponent } from './views/nav-bar/nav-bar.component';
import { AboutusComponent } from './views/aboutus/aboutus.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import {ItemComponent} from './views/item/item.component';
import { HeadingComponent } from './views/heading/heading.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    AboutusComponent,
    NotFoundComponent,
    ItemComponent,
    HeadingComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([

      {
        path:'home/item',
        component:ItemComponent
      }
      ,
      {
        path:'aboutus',
        component:AboutusComponent
      },
       {
        path:'home',
        component:HomeComponent
      },
       {
        path:'**',
        component:NotFoundComponent
      },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
