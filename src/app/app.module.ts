import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddItemsComponent } from './add-items/add-items.component';
import {FormsModule} from "@angular/forms";
import { FinalListComponent } from './final-list/final-list.component';
import {ItemService} from "../services/item.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    AddItemsComponent,
    FinalListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
