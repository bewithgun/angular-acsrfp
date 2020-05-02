import { Component, OnInit, ViewChild } from '@angular/core';
import { ingredientHandler } from '../../shared/indrigients.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  
  JFAddNewIngredient(ele)
  {
    this.ingredients.push(new ingredientHandler(ele.namev,ele.amount))
  }
ingredients : ingredientHandler[]=
[
  new ingredientHandler("Tomatos",12),
  new ingredientHandler("Bringle",20)
]
  constructor() { }

  ngOnInit(): void {
  }

}
