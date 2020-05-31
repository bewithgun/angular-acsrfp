import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './header/recipe/recipe.component';
import { RecipeListComponent } from './header/recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './header/recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './header/recipe/recipe-item/recipe-item.component';
import { AppDropdownDirective } from './app-dropdown.directive';
import { ShoppingListServService } from './shared/shopping-list-serv.service';
import { RouterModule, Routes } from '@angular/router';
import { RecipeNotSelectedComponent } from './header/recipe/recipe-not-selected/recipe-not-selected.component';
import { RecipeEditComponent } from './header/recipe/recipe-edit/recipe-edit.component';
import { recipeServ } from './shared/recipeServ.service';
import { shoppingModule } from './header/shopping/shoping.module';

var route: Routes =
[
  {path: '', component: RecipeComponent},
  {path: 'recipes', component: RecipeComponent, children: [
    {path: 'detail/:id', component: RecipeDetailComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: 'detail/:id/edit', component: RecipeEditComponent},
    {path: '', component: RecipeNotSelectedComponent}
  ]}]
@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(route), ReactiveFormsModule,shoppingModule],
  declarations: [ AppComponent, HeaderComponent, RecipeComponent, RecipeListComponent, RecipeDetailComponent,  RecipeItemComponent, AppDropdownDirective, RecipeNotSelectedComponent, RecipeEditComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ShoppingListServService,recipeServ]
})
export class AppModule { }
