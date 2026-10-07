import { Component, inject } from '@angular/core'; import { FormsModule } from '@angular/forms';
import { RECIPES_LIST_DATA } from '../../data/recipes-list-data'; import { Router, RouterLink } from '@angular/router';
@Component({ selector:'app-recipes-list', imports:[RouterLink,FormsModule], templateUrl:'./recipes-list.html', styleUrl:'./recipes-list.css' })
export class RecipesList { recipesList = RECIPES_LIST_DATA; filterType=''; _name=''; _difficulty=''; _recipesListFilter=this.recipesList.recipes; private readonly router=inject(Router); viewDetails(id:number):void { this.router.navigate(['recipes-detail',id]); }
filterExternal():void { this.router.navigate(['recipes-detail-v2'],{queryParams:{filterType:this.filterType,name:this._name,difficulty:this._difficulty}}); }
filterRecipesList():void { if(this.filterType==='NAME') this._recipesListFilter=this.recipesList.recipes.filter((x:any)=>x.name.toLowerCase().includes(this._name.toLowerCase())); else if(this.filterType==='DIFFICULTY') this._recipesListFilter=this.recipesList.recipes.filter((x:any)=>x.difficulty.toLowerCase().includes(this._difficulty.toLowerCase())); else this._recipesListFilter=this.recipesList.recipes; } }
