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
  recipes: recipeHandler[];
  constructor(private recSV: recipeServ) { }

  ngOnInit() {
    console.log("r=",this.recipes);
    this.recipes = this.recSV.getRecipes();
    console.log("r=",this.recipes);    

    this.recSV.syncOverAll.subscribe(
      () => {
     this.recipes = this.recSV.getRecipes();
      }
    )
  }

}
