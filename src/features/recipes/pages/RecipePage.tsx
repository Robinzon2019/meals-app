import { useMemo } from "react"
import { useAppStore } from "../../../store/useAppStore"
import MealCard from "../components/MealCard"

export default function RecipePage() {
  const meals = useAppStore((state) => state.meals)

  const hasMeals = useMemo(() => meals.meals.length > 0, [meals])

  return (
    <>
      <h1 className="text-6xl font-extrabold">Recipes</h1>

      {hasMeals ? (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
          {meals.meals.map( (meal) => (
            <MealCard
              key={meal.idMeal}
              meal={meal}
            />
          ))}
        </div>
      ) : (
        <p className="my-10 text-center text-2xl">
          There are no results yet, please use the form to search for recipes.
        </p>
      )}
    </>
  )
}
