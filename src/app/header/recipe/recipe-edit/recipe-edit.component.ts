import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { recipeHandler } from '../recipeHandler.model';
import { recipeServ } from '../../../shared/recipeServ.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeEditForm : FormGroup;
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
        console.log("EditMode",this.editMode);
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
        
      }
    )
      this.recipeEditForm = new FormGroup(
      {
        'recipeName': new FormControl(this.Rname),
        'recipeImageUrl': new FormControl(this.RImgUrl),
        'recipeDescription' : new FormControl(this.Rdesc)
      }
    )
    console.log("form data", this.recipeEditForm.value);
  }

  onSubmit()
  {}

}