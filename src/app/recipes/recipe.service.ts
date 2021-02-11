import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe(
    //         'Beef on a bed of potatoes', 
    //         'This is simply the best recipe', 
    //         'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_960_720.jpg',
    //         [
    //             new Ingredient('Beef', 1),
    //             new Ingredient('Potatoes', 1),
    //         ]),
    //     new Recipe(
    //         'Gnocchi', 
    //         'How to make your own gnocchi', 
    //         'https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245_960_720.jpg',
    //         [
    //             new Ingredient('Dough', 1),
    //         ]),
    //     new Recipe(
    //         'Lasagna', 
    //         'Delicious lasagna recipe', 
    //         'https://cdn.pixabay.com/photo/2017/02/15/15/17/meal-2069021_960_720.jpg',
    //         [
    //             new Ingredient('Lasagna dough', 1),
    //             new Ingredient('Meat', 1),
    //         ])
    // ];
    private recipes: Recipe[] = [];
    
    constructor(
        private shoppingListService: ShoppingListService, 
        private store: Store<{ shoppingList: { ingredients: Ingredient[] }}>){

    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        // this.shoppingListService.addIngredients(ingredients);
        this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}