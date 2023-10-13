import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailComponent } from './cocktail/cocktail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: ":type/cocktail",
    component: CocktailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
