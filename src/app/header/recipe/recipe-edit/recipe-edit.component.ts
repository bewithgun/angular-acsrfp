import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { recipeHandler } from '../recipeHandler.model';
import { recipeServ } from '../../../shared/recipeServ.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
recipeEditForm : FormGroup;
recipeIngredientsForm = new FormArray([]);
id: number;
editMode = false;
recipeOfId : recipeHandler;
  constructor(private routeActv: ActivatedRoute,private recipeSv: recipeServ) { }

Rname;
Rdesc;
RImgUrl;

  ngOnInit() {
    this.routeActv.params.subscribe(
      (params : Params) =>
      {
        this.id= params['id']-1;
        this.editMode = this.id != null;
        this.Rname = '';
        this.Rdesc = '';
        this.RImgUrl= '';
        if(this.editMode)
        {
          this.recipeOfId = this.recipeSv.getRecipes(this.id);
          this.Rname = this.recipeOfId.recipeName;
          this.Rdesc = this.recipeOfId.recipeDescription;
          this.RImgUrl = this.recipeOfId.recipeImageUrl;
        }
        if(this.recipeOfId.recipeIngredients[0]!=null)
        {
          
          for (let j of this.recipeOfId.recipeIngredients)
          {
            this.recipeIngredientsForm.push(
              new FormGroup({
              'ingredientName' : new FormControl(j.name),
              'ingredientAmount' : new FormControl(j.amount)
            })
            )
          }
        }
        
      }
    )
      this.recipeEditForm = new FormGroup(
      {
        'recipeName': new FormControl(this.Rname),
        'recipeImageUrl': new FormControl(this.RImgUrl),
        'recipeDescription' : new FormControl(this.Rdesc),
        'ingredientsG':  this.recipeIngredientsForm
      }
    )
  }

  onSubmit()
  {}

    get controls() { // a getter!
      return (<FormArray>this.recipeEditForm.get('ingredientsG')).controls;
    }

}