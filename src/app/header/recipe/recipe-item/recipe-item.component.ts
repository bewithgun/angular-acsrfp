import { Component, OnInit, Input } from '@angular/core';
import { recipeHandler } from '../recipeHandler.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipeData: recipeHandler;
  constructor() {
    console.log("recipe name is");
   }

  ngOnInit(): void {
  }

}
