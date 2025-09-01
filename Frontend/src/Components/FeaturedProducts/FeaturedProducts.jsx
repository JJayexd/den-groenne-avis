import { useFetch } from "../../Hooks/useFetch";
import { BarLoader } from "react-spinners";

export const FeaturedProducts = () => {
    const { data, loading, error } = useFetch("http://localhost:3000/api/products")

    if (loading) return (
        <BarLoader /> // React Spinners, https://www.davidhu.io/react-spinners/storybook/?path=/docs/barloader--docs
    );

    if (error) return <p>Fejl: {error}</p>;

    return (
        <ul>
            {data.map(item =>(
                <li key={item.id}>
                    
                </li>
            ))} 
        </ul>
    )
}