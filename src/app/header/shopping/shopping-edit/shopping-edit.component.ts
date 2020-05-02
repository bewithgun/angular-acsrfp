import { Component, OnInit, Output, EventEmitter ,ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@Output() JLOnAddIngredients = new EventEmitter<object>();
ele={
  namev: "",amount: 0
}
JFonAddIngredients(nameJV,amountJV)
{
  this.ele.namev=nameJV.value;
  this.ele.amount=amountJV.value;
  this.JLOnAddIngredients.emit(this.ele);
}
  constructor() { }

  ngOnInit(): void {
  }

}
