import { Injectable } from '@angular/core';
import { ingredientHandler } from './indrigients.model';

@Injectable()
export class ShoppingListServService {
ingredients : ingredientHandler[]=
[
  new ingredientHandler("Tomatos",12),
  new ingredientHandler("Bringle",20)
]
addIngredient(name: string,amount: number)
{
  this.ingredients.push(new ingredientHandler(name,amount));
}

  constructor() { }

}