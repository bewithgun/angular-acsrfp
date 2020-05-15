import { Component, OnInit, Output, EventEmitter ,ViewChild, ElementRef} from '@angular/core';
import { ShoppingListServService } from '../../../shared/shopping-list-serv.service';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
  
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('form') formJsV: NgForm;
isEditMode = false;
editIngIndex;
editIng;
JFonAddIngredients(form : NgForm)
{
  if(this.isEditMode==true)
    this.shoppingSV.updateIngredients(this.editIngIndex,form.value.name,form.value.amount);
  else
    this.shoppingSV.addIngredient(form.value.name,form.value.amount);

    this.isEditMode=false;
    this.formJsV.reset();
  
}
  constructor(private shoppingSV: ShoppingListServService) { }

  ngOnInit(): void {
      this.shoppingSV.callEdit.subscribe(
            (index) =>
        {
          console.log("Edit mode is ",this.isEditMode);
          this.editIngIndex = index;
          this.editIng = this.shoppingSV.getIngredientsbyN(this.editIngIndex);
          this.isEditMode=true;
          console.log(this.formJsV);
          this.formJsV.setValue(
            {
              'name': this.editIng.name,
              'amount': this.editIng.amount
            }
          )
          
        }
      )    
  }

  onClear()
  {
    this.formJsV.reset();
  }

}
