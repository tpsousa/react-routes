import { Link, Outlet } from "react-router";

export default function Products() {
    return (
        <>
            <h1>Produtos</h1>

            <nav>
                <Link to="/products">
                    Todos os produtos
                </Link>
            </nav>

            <Outlet />
        </>
    );
}
