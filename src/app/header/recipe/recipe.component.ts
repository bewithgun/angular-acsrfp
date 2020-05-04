import { Component, OnInit } from '@angular/core';
import { recipeHandler } from './recipeHandler.model';
import { recipeServ } from '../../shared/recipeServ.service';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers : [recipeServ]
})
export class RecipeComponent implements OnInit {
  recipe: recipeHandler;
JFonSelectRecipe(recipe: recipeHandler)
{
  this.recipe=recipe;
}
  constructor() { }

  ngOnInit(): void {
  }

}
