import { Injectable } from '@angular/core';
import { ingredientHandler } from './indrigients.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingListServService {
callEdit = new Subject<number>();
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
getIngredientsbyN(N : number)
{
  return this.ingredients.slice()[N];
}
updateIngredients(N: number,name: string,amount: number)
{
  this.ingredients[N]=new ingredientHandler(name,amount);
}

deleteIngredients(N)
{
  this.ingredients.splice(N,1);
}

  constructor() { }

}