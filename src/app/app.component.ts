import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  TodisplayRecipe = true;
  TodisplayShoppingList = false;
  changeDisplayStatus(event)
  {
    this.TodisplayRecipe = event.ToDisplayRecipe;
    this.TodisplayShoppingList = event.ToisplayShoppingList;
  }
}
