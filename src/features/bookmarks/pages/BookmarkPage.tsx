import { useMemo } from "react";
import { useAppStore } from "../../../store/useAppStore";
import MealCard from "../../recipes/components/MealCard";

export default function BookmarkPage() {
  const bookmarks = useAppStore((state) => state.bookmarks);
  const hasBookmarks = useMemo(() => bookmarks.length > 0, [bookmarks]);

  return (
    <>
      <h1 className="text-6xl font-extrabold">Bookmarks</h1>

      { hasBookmarks ? (
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
            {bookmarks.map(meal => (
              <MealCard
                key={meal.idMeal} 
                meal={meal} 
              />
            ))}
          </div>
      ) : (
        <p className="my-10 text-center text-2xl">
          No bookmars have been added yet.
        </p>
      )}
    </>
  )
}
