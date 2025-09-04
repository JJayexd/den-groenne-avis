import { FeaturedProducts } from "../Components/FeaturedProducts/FeaturedProducts";
import { DGABanner } from "../Components/DGABanner/DGABanner";
import { FeaturedCategories } from "../Components/FeaturedCategories/FeaturedCategories";
import { Donations } from "../Components/Donations/Donations";

export const FrontPage = () => {
  return (
    <>
      <FeaturedProducts />
      <hr className="max-w-6xl w-full mx-auto my-4 border-t-4 border-green-500" />
      <DGABanner />
      <hr className="max-w-6xl w-full mx-auto my-4 border-t-4 border-green-500" />
      <FeaturedCategories />
      <hr className="max-w-6xl w-full mx-auto my-4 border-t-4 border-green-500" />
      <Donations />
    </>
  );
};
