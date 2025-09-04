import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../../Pages/LoginPage";
import { SignupPage } from "../../Pages/SignupPage";
import { Layout } from "../../Components/Layout/Layout";
import { FrontPage } from "../../Pages/FrontPage";
import { CategoryPage } from "../../Pages/CategoryPage";
import { Products } from "../Products/Products";
import { ProductDetailsPage } from "../../Pages/ProductDetailsPage";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/" element={<Layout />}>
                <Route index element={<FrontPage />} />
                
                <Route path="categories" element={<CategoryPage />}>
                    <Route path=":categorySlug" element={<Products />} />
                </Route>
                <Route path="products/:productSlug" element={<ProductDetailsPage />} />
            </Route>
        </Routes>
    )
}
