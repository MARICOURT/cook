import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListActions from './shopping-list.actions';

const initalState = {
    ingredients: []
};

export function shoppingListReducer(state = initalState, action: ShoppingListActions.AddIngredient) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state, ingredients: [...state.ingredients, action.payload]
            }
        default:
            return state;
    }
}