import { Route } from "react-router-dom";
import BookmarkPage from "./pages/BookmarkPage";

export const bookmarkRoutes = (
    <>
        <Route path="/bookmarks" element={<BookmarkPage />} />
    </>
)