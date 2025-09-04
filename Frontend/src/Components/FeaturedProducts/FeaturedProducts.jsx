import { useFetch } from "../../Hooks/useFetch";
import { BarLoader } from "react-spinners";

export const FeaturedProducts = () => {
  const { data, loading, error } = useFetch("http://localhost:3000/api/products");

  if (loading) return <BarLoader className="mx-auto my-8" />;
  if (error) return <p className="text-center text-red-500 mt-4">Fejl: {error}</p>;

  return (
    <div className="max-w-6xl w-full mx-auto mt-4 px-4">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-left">
        Udvalgte Produkter
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {data.slice(0, 6).map((item) => (
          <figure
            key={item.id}
            className="relative w-full pb-[100%] overflow-hidden group shadow-sm"
          >
            <img
              src={item.image}
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <figcaption
              className="absolute bottom-0 left-0 w-full bg-green-400/70 text-white text-center text-sm py-2
              opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              {item.name}
            </figcaption>
          </figure>
        ))}
      </ul>
    </div>
  );
};
