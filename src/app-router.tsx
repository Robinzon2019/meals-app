import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./shared/layouts/Layout";
import { AppRoutes } from "./routes/AppRoutes";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          { AppRoutes }
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
