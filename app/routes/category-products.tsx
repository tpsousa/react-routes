import { Link, useParams } from "react-router";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function CategoryProducts() {

    const { categoryName } = useParams();

    const categoryProducts = products.filter(product =>
        product.categories.some(
            category => category.name === categoryName
        )
    );

    return (
        <main>
            <h1>
                Categoria: {categoryName}
            </h1>

            {categoryProducts.length === 0 ? (
                <p>
                    Nenhum produto encontrado.
                </p>
            ) : (
                categoryProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))
            )}

            <Link to="/categories">
                Voltar para categorias
            </Link>
        </main>
    );
}