import axios from "axios";
import { 
    CategoriesAPIResponseSchema, 
    IngredientsAPIResponseSchema, 
    MealsAPIResponseSchema, 
    RecipeAPIResponseSchema 
} from "../../../shared/schemas/recipeSchema";
import type { Meal, SearchFilter } from "../../../shared/types/recipeTypes";

export async function getCategories() {
    const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
    const { data } = await axios(url)
    const result = CategoriesAPIResponseSchema.safeParse(data);

    if(result.success) {
       return result.data;
    }
}

export async function getIngredients() {
    const url = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";
    const { data }  = await axios(url);
    const result = IngredientsAPIResponseSchema.safeParse(data);

    if(result.success) {
        return result.data;
    } else {
        console.error("Error fetching ingredients: ", result.error);
        throw new Error("Failed to fetch ingredients");
    }
}

export async function getRecipes(filters: SearchFilter) {
    console.log("Filters used for fetching recipes: ", filters);
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`;
    const { data } = await axios(url);
    const result = MealsAPIResponseSchema.safeParse(data);
    console.log("Data fetched from recipes API: ", data);

    if(result.success) {
        return result.data;
    } else {
        console.error("Error fetching recipes: ", result.error);
        throw new Error("Failed to fetch recipes");
    }
}

export async function getRecipeById(id: Meal['idMeal']) {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const { data } = await axios(url);
    const result = RecipeAPIResponseSchema.safeParse(data.meals[0]);

    if(result.success) {
        return result.data;
    } else {
        console.error("Error fetching recipe by ID: ", result.error);
        throw new Error("Failed to fetch recipe by ID");
    }
}