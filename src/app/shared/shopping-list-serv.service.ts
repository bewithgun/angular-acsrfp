import { Injectable } from '@angular/core';
import { ingredientHandler } from './indrigients.model';

@Injectable()
export class ShoppingListServService {
private ingredients : ingredientHandler[]=
[
  new ingredientHandler("Tomatos",12),
  new ingredientHandler("Bringle",20)
]
addIngredient(name: string,amount: number)
{
  this.ingredients.push(new ingredientHandler(name,amount));
}

getIngredients()
{
  return this.ingredients.slice();

}

  constructor() { }

}