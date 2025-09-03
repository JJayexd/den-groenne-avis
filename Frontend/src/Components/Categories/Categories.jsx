import { Link } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
import { BarLoader } from "react-spinners";

export const Categories = () => {

  const { data: categories, loading, error } = useFetch("http://localhost:3000/api/categories");

  if (loading) return <BarLoader />;
  if (error) return <p className="mx-6 text-red-500">Fejl: {error}</p>;

  return (
    <aside className="my-6 mx-6 max-w-[200px]">
        <h3 className="mb-2 font-bold text-xl">Kategorier:</h3>
        <ul>
            {categories &&
            [...categories] // Lav en kopi så vi ikke ændre originalen
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((cat) => (
                <li key={cat.id}>
                    <Link
                        to={`/categories/${cat.slug}`}
                        className="hover:font-semibold"
                    >
                        {cat.name}
                    </Link>
                </li>
            ))}
        </ul>
    </aside>

  );
};
