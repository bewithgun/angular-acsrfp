import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { recipeHandler } from '../recipeHandler.model';
import { recipeServ } from '../../../shared/recipeServ.service';
import { ingredientHandler } from '../../../shared/indrigients.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() JLRecipeListOnSelect = new EventEmitter<recipeHandler>();
  JFonSelectRecipeItem(recipe: recipeHandler)
  {
    this.JLRecipeListOnSelect.emit(recipe)
  }
  recipes: recipeHandler[];
  constructor(private recSV: recipeServ) { }

  ngOnInit() {
    this.recipes = this.recSV.getRecipes();
  }

}
