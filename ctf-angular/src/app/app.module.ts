import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';               //api
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {KnobModule} from 'primeng/knob';
import { FormsModule } from "@angular/forms";
import {MenubarModule} from 'primeng/menubar';
import {CarouselModule} from 'primeng/carousel';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CountingComponent } from './counting/counting.component';
import { Lab4Component } from './lab4/lab4.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { TopbannerComponent } from './topbanner/topbanner.component';
import { CategorymenuComponent } from './categorymenu/categorymenu.component';
import { TodolistComponent } from './todolist/todolist.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountingComponent,
    Lab4Component,
    NavbarComponent,
    SearchbarComponent,
    TopbannerComponent,
    CategorymenuComponent,
    TodolistComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    KnobModule,
    MenubarModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
