import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RECIPES_LIST_DATA } from '../../data/recipes-list-data';

@Component({ selector: 'app-recipes-list', imports: [RouterLink, FormsModule], templateUrl: './recipes-list.html', styleUrl: './recipes-list.css' })
export class RecipesList {
  recipesList = RECIPES_LIST_DATA;
  filterType = '';
  _name = '';
  _difficulty = '';
  _recipesListFilter = this.recipesList.recipes;
  private readonly router = inject(Router);

  get canFilter(): boolean {
    if (this.filterType === 'NAME') return this._name.trim().length > 0;
    if (this.filterType === 'DIFFICULTY') return this._difficulty.trim().length > 0;
    return false;
  }

  viewDetails(id: number): void { this.router.navigate(['recipes-detail', id]); }

  filterRecipesList(): void {
    if (this.filterType === 'NAME') this._recipesListFilter = this.recipesList.recipes.filter(x => x.name.toLowerCase().includes(this._name.trim().toLowerCase()));
    else if (this.filterType === 'DIFFICULTY') this._recipesListFilter = this.recipesList.recipes.filter(x => x.difficulty.toLowerCase() === this._difficulty.toLowerCase());
    else this._recipesListFilter = this.recipesList.recipes;
  }

  filterRecipesListExternal(): void {
    this.router.navigate(['recipes-detail-v2'], {
      queryParams: this.filterType === 'NAME' ? { name: this._name.trim() } : { difficulty: this._difficulty },
    });
  }
}
