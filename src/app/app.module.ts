import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './header/recipe/recipe.component';
import { ShoppingComponent } from './header/shopping/shopping.component';
import { RecipeListComponent } from './header/recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './header/recipe/recipe-detail/recipe-detail.component';
import { ShoppingEditComponent } from './header/shopping/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './header/recipe/recipe-item/recipe-item.component';
import { AppDropdownDirective } from './app-dropdown.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, RecipeComponent, ShoppingComponent, RecipeListComponent, RecipeDetailComponent, ShoppingEditComponent, RecipeItemComponent, AppDropdownDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
