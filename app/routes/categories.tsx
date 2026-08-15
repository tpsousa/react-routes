import { Link } from "react-router";
import { products } from "../data/products";

export default function Categories() {

    const categories = Array.from(
        new Set(
            products.flatMap(product =>
                product.categories.map(category => category.name)
            )
        )
    );

    return (
        <main>
            <h1>Categorias</h1>

            {categories.map(category => (
                <div key={category}>
                    <Link
                        to={`/categories/${category}`}
                    >
                        {category}
                    </Link>
                </div>
            ))}
        </main>
    );
}