import { Component, OnInit, ViewChild } from '@angular/core';
import { ingredientHandler } from '../../shared/indrigients.model';
import { ShoppingListServService } from '../../shared/shopping-list-serv.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  constructor(private shopingSV: ShoppingListServService) { }
  ngOnInit(): void {
  }

}
