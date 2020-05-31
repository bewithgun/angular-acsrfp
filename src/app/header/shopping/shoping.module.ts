import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ShoppingComponent } from "./shopping.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListServService } from "../../shared/shopping-list-serv.service";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    ShoppingComponent,
    ShoppingEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
  {path: 'shopping', component: ShoppingComponent}
    
    ])
  ]
  
})


export class shoppingModule {

}