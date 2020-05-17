import { Component, OnInit, Input ,Output, EventEmitter} from '@angular/core';
import { recipeHandler } from '../recipeHandler.model';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { recipeServ } from '../../../shared/recipeServ.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
JLonSelectRecipe = new EventEmitter<recipeHandler>();
@Input() recipeData: recipeHandler;
JFOnSelctRecipe(recipeData)
{
  //Emitting event with selected recipe;
  // this.JLonSelectRecipe.emit(recipeData);
  let id = this.recipeSv.getRecipes().indexOf(this.recipeData)+1;
  this.routeM.navigate(['/recipes','detail',id]);
}
  constructor(private routeM : Router,private recipeSv : recipeServ) {}

  ngOnInit(): void {
  }

}
