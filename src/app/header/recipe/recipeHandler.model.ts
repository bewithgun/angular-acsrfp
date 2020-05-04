import { ingredientHandler } from "../../shared/indrigients.model";

export class recipeHandler
{
  recipeName;
  recipeDescription;
  recipeImageUrl;
  recipeIngredients: ingredientHandler[];
  constructor(N,D,I,RI){
    this.recipeName=N;
    this.recipeDescription=D;
    this.recipeImageUrl=I;
    this.recipeIngredients=RI;
  }
}