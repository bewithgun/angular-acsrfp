import { Component, OnInit, Input ,Output, EventEmitter} from '@angular/core';
import { recipeHandler } from '../recipeHandler.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Output() JLonSelectRecipe = new EventEmitter<recipeHandler>();
@Input() recipeData: recipeHandler;
JFOnSelctRecipe(recipeData)
{
  //Emitting event with selected recipe;
  this.JLonSelectRecipe.emit(recipeData);
}
  constructor() {}

  ngOnInit(): void {
  }

}
