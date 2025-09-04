import { NavLink, useParams } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
import { BarLoader } from "react-spinners";

export const Products = () => {
  const { categorySlug } = useParams();
  const { data, loading, error } = useFetch(
    `http://localhost:3000/api/products/category/${categorySlug}`
  );

  const products = data || [];

  if (loading) return <BarLoader className="mx-6" />;
  if (error) return <p className="mx-6 text-red-500">Fejl: {error}</p>;
  if (products.length === 0) return <p className="mx-6">Ingen produkter fundet.</p>;

  return (
    <section className="my-6 mx-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <NavLink key={product.id} to={`/products/${product.slug}`} className="block">
          <figure className="relative w-full pb-[100%] overflow-hidden rounded-lg group shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Hover price overlay */}
            <figcaption
              className="absolute bottom-0 left-0 w-full bg-green-400/70 text-white text-center text-sm py-2
              opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              {product.price} DKK
            </figcaption>
          </figure>
          {/* Product name below image */}
          <h4 className="mt-2 font-bold text-lg">{product.name}</h4>
        </NavLink>
      ))}
    </section>
  );
};
