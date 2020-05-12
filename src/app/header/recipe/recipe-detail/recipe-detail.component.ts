import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { recipeHandler } from '../recipeHandler.model';
import { ShoppingListServService } from '../../../shared/shopping-list-serv.service';
import { recipeServ } from '../../../shared/recipeServ.service';
import { RouterLinkActive, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipeData: recipeHandler;
  recipeData: recipeHandler;

  // @ViewChild('RecipeIng') RecipeIngJS;

  constructor(private ShoppingSV: ShoppingListServService,private RecipeSV: recipeServ,private activeLinkData : ActivatedRouteSnapshot) { }
  
  onAddToShoppingList()
  {
    for(let i of this.recipeData.recipeIngredients)
    {
    this.ShoppingSV.addIngredient(i.name,i.amount);

    }
  }
  ngOnInit(){
    // this.RecipeSV.getRecipes(+this.activeLinkData.params['id']);
  }

}
