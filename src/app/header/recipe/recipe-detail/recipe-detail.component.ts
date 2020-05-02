import { Component, OnInit, Input } from '@angular/core';
import { recipeHandler } from '../recipeHandler.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeData: recipeHandler;
  

  constructor() { }

  ngOnInit(): void {
  }

}
