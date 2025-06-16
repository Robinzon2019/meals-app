import { z } from 'zod'
import type { CategoriesAPIResponseSchema, MealAPIResponseSchema, MealsAPIResponseSchema, IngredientsAPIResponseSchema, RecipeAPIResponseSchema, SearchFiltersSchema } from '../schemas/recipeSchema'

export type Categories = z.infer<typeof CategoriesAPIResponseSchema> 
export type Ingredients = z.infer<typeof IngredientsAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFiltersSchema>
export type Meals = z.infer<typeof MealsAPIResponseSchema>
export type Meal = z.infer<typeof MealAPIResponseSchema>
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>