import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from '../../../node_modules/rxjs';

@Injectable()
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Schnitzel',
            'Super tasted schnitzel',
            'http://v.img.com.ua/nxs176/b/600x500/9/9b/6c23f6f96b1f54301bf08988f50e39b9.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]
        ),
        new Recipe(
            'Burger',
            'Another simple test',
            'https://foodmiles.com.ua/wp-content/uploads/2017/11/764-1920x1080.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]
        )
    ];

    constructor(private slService: ShoppingListService) {}

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
}
