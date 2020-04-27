import { Component, OnInit } from '@angular/core';
import { recipeHandler } from '../recipeHandler.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

recipes: recipeHandler[] = 
[
  new recipeHandler('Green Veg Juice','Not tasty lol','https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/food_combos_lose_weight_slideshow/493ss_thinkstock_rf_avocado_greens.jpg'),
  new recipeHandler('Carrot','Noice it is.','https://www.thespruceeats.com/thmb/EqZorXp-y4Fd2jKFmJBrn9Hn9Yw=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/carrots-with-butter-and-seasonings-3052473-hero-01-5c40fb71c9e77c00017175a0.jpg')
]
  constructor() { }

  ngOnInit(): void {
  }

}
