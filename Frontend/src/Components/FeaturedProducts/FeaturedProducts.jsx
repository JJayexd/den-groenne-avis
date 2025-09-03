import { useFetch } from "../../Hooks/useFetch";
import { BarLoader } from "react-spinners";

export const FeaturedProducts = () => {
    const { data, loading, error } = useFetch("http://localhost:3000/api/products");

    if (loading) return <BarLoader />;
    if (error) return <p>Fejl: {error}</p>;

    return (
        <div className="w-6xl m-auto mt-4">
            <h2>Udvalgte Produkter</h2>
            <ul className="grid grid-cols-6 gap-2">
                {data.slice(0, 6).map((item) => (
                    <figure key={item.id} className="relative group w-46 h-46 overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        <figcaption className="absolute bottom-0 left-0 w-full 
                            bg-green-400/70 text-white text-center text-sm py-2
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {item.name}
                        </figcaption>
                    </figure>
                ))}
            </ul>
        </div>
    );
};
