import { Ingredient } from 'src/app/shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

export interface State {
    ingredients: Ingredient[];
    editedIngredient: Ingredient;
    editedIngredientIndex: number;
}

export interface AppState {
    shoppingList: State;
}

const initalState: State = {
    ingredients: [],
    editedIngredient: null,
    // -1 not a valid index !=  if we set as 0
    editedIngredientIndex: -1
};

export function shoppingListReducer(state: State = initalState, action: ShoppingListActions.CombinedShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state, 
                ingredients: [...state.ingredients, action.payload]
            }
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            }
        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[action.payload.index];
            const updatedIngredient = {
                ...ingredient,
                ...action.payload.ingredient
            };

            const updatedIngredients = [...state.ingredients];
            updatedIngredients[action.payload.index] = updatedIngredient;

            return {
                ...state,
                ingredients: updatedIngredients
            }
        case ShoppingListActions.DELETE_INGREDIENT:
            return {
                ...state,
                ingredients: state.ingredients.filter((ig, igIndex) => {
                    return igIndex !== action.payload;
                })
            }
        default:
            return state;
    }
}