import { Categories } from "../Components/Categories/Categories"
import { Products } from "../Components/Products/Products"

export const CategoryPage = () => {
    return (
        <div className="flex flex-col md:flex-row max-w-[1400px] mx-auto px-4">
            <div className="w-full md:w-[220px]">
            <Categories />
            </div>
    
            <div className="flex-1 overflow-y-scroll">
                <Products />
            </div>
        </div>
    )
}