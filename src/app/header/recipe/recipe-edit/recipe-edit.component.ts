import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
id: number;
editMode = false;
  constructor(private routeActv: ActivatedRoute) { }


  ngOnInit() {
    this.routeActv.params.subscribe(
      (params : Params) =>
      {
        this.id= params['id'];
        this.editMode = this.id != null;
        console.log("EditMode",this.editMode);
      }
    )
  }

}