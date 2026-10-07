import { Component, computed, input } from '@angular/core';
import { RECIPES_LIST_DATA } from '../../data/recipes-list-data';
@Component({ selector:'app-recipes-detail', imports:[], templateUrl:'./recipes-detail.html', styleUrl:'./recipes-detail.css' })
export class RecipesDetail { id=input<string>(); recipesList = RECIPES_LIST_DATA; filterRecipesList=computed(()=>this.recipesList.recipes.filter((x:any)=>x.id===Number(this.id()))); }
