import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { recipeHandler } from '../recipeHandler.model';
import { ShoppingListServService } from '../../../shared/shopping-list-serv.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeData: recipeHandler;
  // @ViewChild('RecipeIng') RecipeIngJS;

  constructor(private ShoppingSV: ShoppingListServService) { }

  onAddToShoppingList()
  {
    // for(let i of this.RecipeIngJS.nativeElement.children)
    // {
    //   var IngName = i.children[0].textContent;
    //   var IngAmount = i.children[1].textContent
    //   this.ShoppingSV.addIngredient(IngName,IngAmount);
    // }
    for(let i of this.recipeData.recipeIngredients)
    {
    this.ShoppingSV.addIngredient(i.name,i.amount);

    }
    // this.ShoppingSV.addIngredient(recipeData.in);
  }
  ngOnInit(): void {
  }

}
