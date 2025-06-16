import { Route } from "react-router-dom"
import RecipePage from "./pages/RecipePage";

export const recipesRoutes = (
    <>
        <Route path="/" element={<RecipePage />} />
    </>
)