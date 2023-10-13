import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { HttpClientModule } from '@angular/common/http';
import { IngredientsComponent } from './ingredients/ingredients.component';

@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
    CocktailComponent,
      IngredientsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
