import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Beef on a bed of potatoes', 'This is simply the best recipe', 'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_960_720.jpg'),
        new Recipe('Gnocchi', 'How to make your own gnocchi', 'https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245_960_720.jpg'),
        new Recipe('Lasagna', 'Delicious lasagna recipe', 'https://cdn.pixabay.com/photo/2017/02/15/15/17/meal-2069021_960_720.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}