import * as ShoppingListActions from './shopping-list.actions';

const initalState = {
    ingredients: []
};

export function shoppingListReducer(state = initalState, action: ShoppingListActions.CombinedShoppingListActions) {
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
        default:
            return state;
    }
}