import { Routes, Route } from "react-router-dom";
import { Layout } from "../../Components/Layout/Layout";
import { FrontPage } from "../../Pages/FrontPage";
import { CategoryPage } from "../../Pages/CategoryPage";
import { Products } from "../Products/Products";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<FrontPage />} />
                
                <Route path="categories" element={<CategoryPage />}>
                    <Route path=":categories_slug" element={<Products />} />
                </Route>
            </Route>
        </Routes>
    )
}
