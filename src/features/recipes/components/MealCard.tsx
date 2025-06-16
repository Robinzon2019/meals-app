import { useAppStore } from "../../../store/useAppStore"
import type { Meal } from "../../../shared/types/recipeTypes"

type MealCardProps = {
    meal: Meal
}

export default function MealCard({ meal } : MealCardProps) {
    const selectRecipe = useAppStore((state) => state.selectRecipe)
  return (
    <div className="border shadow-lg">
        <div className="overflow-hidden">               
            <img 
                src={meal.strMealThumb} 
                alt={`Image of ${meal.strMeal}`} 
                className="hover:scale-125 transition-transform hover:rotate-2" 
            />
        </div>

        <div className="p-5">
            <h2 className="text-2xl truncate font-black">{ meal.strMeal }</h2>
            <button 
                type="button" 
                className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg"
                onClick={() => selectRecipe(meal.idMeal)}
            >
                View Recipe
            </button>
        </div>
    </div>
  )
}
