import { FeaturedProducts } from "../Components/FeaturedProducts/FeaturedProducts"
import { DGABanner } from "../Components/DGABanner/DGABanner"

export const FrontPage = () => {
    return (
        <>
            <hr className="w-6xl m-auto my-4 border-t-4 border-green-500"/>
            <FeaturedProducts />
            <hr className="w-6xl m-auto my-4 border-t-4 border-green-500"/>
            <DGABanner />
        </>
    )
}