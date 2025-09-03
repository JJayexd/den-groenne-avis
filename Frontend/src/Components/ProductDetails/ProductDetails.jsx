import { useParams } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
import { BarLoader } from "react-spinners";

export const ProductDetails = () => {
  const { productSlug } = useParams();
  const { data: product, loading, error } = useFetch(
    `http://localhost:3000/api/products/${productSlug}`
  );

  if (loading) return <BarLoader />;
  if (error) return <p>Fejl: {error}</p>;
  if (!product) return <p>Ingen Produktdata.</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-auto mb-6 object-cover"
      />
      <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
      <p className="text-gray-700 mb-6">{product.description}</p>
      <p className="text-lg font-semibold">
        <span className="font-bold">Pris:</span> {product.price} kr
      </p>
    </div>
  );
};

