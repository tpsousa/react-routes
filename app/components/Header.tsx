import { Link } from "react-router";

export default function Header (){

    return (

        <header>

            <nav>

                <Link to="/">Home</Link>

                {" | "}

                <Link to ="/products">
                    
                    Produtos
                </Link>

                {" | "}

                <Link to ="/categories">
                   Categorias
                </Link>
            </nav>
        </header>
    )
}