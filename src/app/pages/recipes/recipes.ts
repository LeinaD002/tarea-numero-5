import { Component } from '@angular/core';
@Component({ selector: 'app-recipes', imports: [], templateUrl: './recipes.html', styleUrl: './recipes.css' })
export class Recipes { recipesList = { recipes: [], total: 50, skip: 0, limit: 30 }; }
