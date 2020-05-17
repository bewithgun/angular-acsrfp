import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { recipeHandler } from '../recipeHandler.model';
import { ShoppingListServService } from '../../../shared/shopping-list-serv.service';
import { recipeServ } from '../../../shared/recipeServ.service';
import { RouterLinkActive, ActivatedRouteSnapshot, ActivatedRoute, Params, Router } from '@angular/router';

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

  constructor(private ShoppingSV: ShoppingListServService,private RecipeSV: recipeServ,private activeR : ActivatedRoute,private routeM: Router) { }
  
  onAddToShoppingList()
  {
    for(let i of this.recipeData.recipeIngredients)
    {
    this.ShoppingSV.addIngredient(i.ingredientName,i.ingredientAmount);
    }
  }
  ngOnInit(){
    // this.RecipeSV.getRecipes(+this.activeLinkData.params['id']);

   this.FullrecipeData = this.RecipeSV.getRecipes();
   this.activeR.params.subscribe(
     (params : Params)=>{
       this.id=+params['id'];
       this.recipeData = this.RecipeSV.getRecipes(this.id-1);
     }
   )
   this.RecipeSV.syncOverAll.subscribe(
     ()=>
     {
       console.log("del");
       this.recipeData = this.RecipeSV.getRecipes(this.id-1);
     }
   )
  }

    onDeleteRecipe()
    {      
      this.RecipeSV.deleteRecipe(this.id);
        this.routeM.navigate(['']);
    }

}
