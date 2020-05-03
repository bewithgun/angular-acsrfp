import { Component, OnInit, Output, EventEmitter ,ViewChild, ElementRef} from '@angular/core';
import { ShoppingListServService } from '../../../shared/shopping-list-serv.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
  
})
export class ShoppingEditComponent implements OnInit {
JFonAddIngredients(nameJV,amountJV)
{
  this.shoppingSV.addIngredient(nameJV.value,amountJV.value);
}
  constructor(private shoppingSV: ShoppingListServService) { }

  ngOnInit(): void {
  }

}
