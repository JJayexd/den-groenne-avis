import { useParams } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
import { BarLoader } from "react-spinners";

export const Products = () => {
  const { categorySlug } = useParams(); // slug fra URL
  const { data, loading, error } = useFetch(
    `http://localhost:3000/api/products/category/${categorySlug}`
  );
  
  const products = data

  if (loading) return <BarLoader />;
  if (error) return <p className="mx-6 text-red-500">Fejl: {error}</p>;

  if (!products || products.length === 0) return <p className="mx-6">Ingen..</p>;

  return (
    <section className="my-6 mx-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <figure
          key={product.id}
          className="p-4 hover:shadow-lg transition-shadow"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover mb-2 rounded"
          />
          <figcaption>
            <h4 className="font-bold text-lg mb-1">{product.name}</h4>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-gray-600 mb-2">{product.price} DKK</p>
          </figcaption>
        </figure>
      ))}
    </section>
  );
};
