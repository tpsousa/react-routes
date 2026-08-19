import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function ProductsList() {
    return (
        <>
            <h2>Lista de produtos</h2>

            {products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </>
    );
}