import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../../store/useAppStore";

export default function Header() {
    const [searchFilters, setSearchFilters] = useState({
        ingredient: "",
        category: ""
    });

    const {pathname} = useLocation();
    const isHome = useMemo(() => pathname === "/", [pathname]);

    const fetchCategories = useAppStore((state) => state.fetchCategories);
    const fetchIngredients = useAppStore((state) => state.fetchIngredients);
    const categories = useAppStore((state) => state.categories);
    const ingredients = useAppStore((state) => state.ingredients);
    const searchRecipes = useAppStore((state) => state.searchRecipes);
    // const showNotification = useAppStore((state) => state.showNotification);

    useEffect(() => {
        fetchCategories();
        fetchIngredients();
    }, [])

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setSearchFilters({
        ...searchFilters,
        [e.target.name]: e.target.value
      });   
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (Object.values(searchFilters).includes("")) {
            // showNotification({
            //     text: "All fields are required",
            //     error: true
            // })
            return;
        }

        // Verify recipes
        searchRecipes(searchFilters);
    }

  return (
    <header className={isHome ? 'bg-header' : 'bg-slate-800' }>
        <div className="mx-auto container px-5 py-16">
            <div className="flex justify-between items-center">
                <div>
                    <img className="w-32" src="./images/meal-logo.png" alt="Meals logo" />
                </div>

                <nav className="flex gap-4">
                    <NavLink to="/" className={({ isActive }) => 
                        isActive ? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"
                    }>
                        Home
                    </NavLink>
                    <NavLink to="/bookmarks" className={({ isActive }) => 
                        isActive ? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"
                    }>
                        Bookmarks
                    </NavLink>
                </nav>
            </div>
            
            { isHome && (
                <form 
                    className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
                    onSubmit={handleSubmit}
                >
                    <div className="space-y-4">
                        <label htmlFor="ingredient" className="block text-white uppercase font-extrabold text-lg">
                            Ingredient
                        </label>

                        <select
                            id="ingredient" 
                            name="ingredient"
                            className="w-full p-3 rounded-lg bg-white focus:outline-none"
                            onChange={handleChange}
                            value={searchFilters.ingredient}
                        >
                            <option value="" disabled hidden>-- Select Ingredient --</option>
                            {ingredients.meals.map((ingredient) => (
                                <option key={ingredient.strIngredient} value={ingredient.strIngredient}>
                                    {ingredient.strIngredient}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-4">
                        <label htmlFor="category" className="block text-white uppercase font-extrabold text-lg">
                            Category
                        </label>

                        <select
                            id="category" 
                            name="category"
                            className="w-full p-3 rounded-lg bg-white focus:outline-none"
                            onChange={handleChange}
                            value={searchFilters.category}
                        >
                            <option value="">-- Select Category --</option>
                            {categories.meals.map((category) => (
                                <option key={category.strCategory} value={category.strCategory}>
                                    {category.strCategory}
                                </option>
                            ))}
                        </select>
                    </div>

                    <input 
                        type="submit" 
                        value="Search Drinks"
                        className="cursor-pointer bg-orange-800 hover:bg-orange-900 
                        text-white font-extrabold w-full p-2 rounded-lg uppercase"
                    />
                </form>
            )}
        </div>
    </header>
  )
}