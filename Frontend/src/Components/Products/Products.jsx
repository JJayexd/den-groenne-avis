import { NavLink, useParams } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
import { BarLoader } from "react-spinners";

export const Products = () => {
  const { categorySlug } = useParams(); // slug fra URL
  const { data, loading, error } = useFetch(
    `http://localhost:3000/api/products/category/${categorySlug}`
  );

  // fallback til tomt array hvis data = null
  const products = data || [];

  if (loading) return <BarLoader className="mx-6" />;
  if (error) return <p className="mx-6 text-red-500">Fejl: {error}</p>;

  if (products.length === 0) return <p className="mx-6">Ingen produkter fundet.</p>;

  return (
    <section className="my-6 mx-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <NavLink 
          key={product.id} 
          to={`/products/${product.slug}`} 
          className="block"
        >
          <figure className="relative group p-4 hover:shadow-lg transition-shadow rounded">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mb-2 rounded"
            />
            <figcaption>
              <h4 className="font-bold text-lg mb-1">{product.name}</h4>
              <p className="text-gray-600 line-clamp-2">{product.description}</p>
              <p className="absolute top-0 left-0 w-full bg-green-400/70 text-white text-center text-sm py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {product.price} DKK
              </p>
            </figcaption>
          </figure>
        </NavLink>
      ))}
    </section>
  );
};
