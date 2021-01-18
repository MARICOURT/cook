import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Beef on a bed of potatoes', 
            'This is simply the best recipe', 
            'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_960_720.jpg',
            [
                new Ingredient('Beef', 1),
                new Ingredient('Potatoes', 1),
            ]),
        new Recipe(
            'Gnocchi', 
            'How to make your own gnocchi', 
            'https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245_960_720.jpg',
            [
                new Ingredient('Dough', 1),
            ]),
        new Recipe(
            'Lasagna', 
            'Delicious lasagna recipe', 
            'https://cdn.pixabay.com/photo/2017/02/15/15/17/meal-2069021_960_720.jpg',
            [
                new Ingredient('Lasagna dough', 1),
                new Ingredient('Meat', 1),
            ])
    ];

    constructor(private shoppingListService: ShoppingListService){

    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}