import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { recipeHandler } from '../recipeHandler.model';
import { ShoppingListServService } from '../../../shared/shopping-list-serv.service';
import { recipeServ } from '../../../shared/recipeServ.service';
import { RouterLinkActive, ActivatedRouteSnapshot, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipeData: recipeHandler;
  FullrecipeData: recipeHandler[];
  recipeData: recipeHandler;
  id : number;

  // @ViewChild('RecipeIng') RecipeIngJS;

  constructor(private ShoppingSV: ShoppingListServService,private RecipeSV: recipeServ,private activeR : ActivatedRoute) { }
  
  onAddToShoppingList()
  {
    for(let i of this.recipeData.recipeIngredients)
    {
    this.ShoppingSV.addIngredient(i.name,i.amount);

    }
  }
  ngOnInit(){
    // this.RecipeSV.getRecipes(+this.activeLinkData.params['id']);

   this.FullrecipeData = this.RecipeSV.getRecipes();
   this.activeR.params.subscribe(
     (params : Params)=>{
       this.id=+params['id'];
       this.recipeData = this.FullrecipeData[this.id-1];
     }
   )
  }

}
