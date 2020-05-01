import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() ChangeNavStatus = new EventEmitter<{ToDisplayShoppingList: boolean, ToDisplayRecipe: boolean}>();
DisplayRecipe()
{
  this.ChangeNavStatus.emit({ToDisplayShoppingList: false,ToDisplayRecipe : true});
}
DisplayShoppingList()
{
  this.ChangeNavStatus.emit({ToDisplayShoppingList: true,ToDisplayRecipe : false});
}
  constructor() { }

  ngOnInit(): void {
  }

}
