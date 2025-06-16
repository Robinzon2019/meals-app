import type { StateCreator } from "zustand";
import { getCategories, getIngredients, getRecipeById, getRecipes } from "../features/recipes/services/RecipeServices";
import type { Categories, Meal, Meals, Ingredients, Recipe, SearchFilter } from "../shared/types/recipeTypes";

export type RecipesSliceType = {
    categories: Categories,
    ingredients: Ingredients,
    meals: Meals,
    selectedRecipe: Recipe,
    modal: boolean,
    fetchCategories: () => Promise<void>
    fetchIngredients: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>
    selectRecipe: (id: Meal['idMeal']) => Promise<void>
    closeModal: () => void
}

export const createRecipesSlice : StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        meals: [],
    },
    ingredients: {
        meals: [],
    },
    meals: {
        meals: [],
    },
    selectedRecipe: {} as Recipe,
    modal: false,
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },
    fetchIngredients: async () => {
        const ingredients = await getIngredients()
        set({
            ingredients
        })

        console.log("Ingredients fetched: ", ingredients);
    },
    searchRecipes: async (filters) => {
        const meals = await getRecipes(filters)
        set({
            meals
        })
    },
    selectRecipe: async (id) => {
       const selectedRecipe = await getRecipeById(id)
       console.log("Selected Recipe: ", selectedRecipe);
       set({
            selectedRecipe,
            modal: true
       })
    },
    closeModal: () => {
        set({
            modal: false,
            selectedRecipe: {} as Recipe
        })
    }
})