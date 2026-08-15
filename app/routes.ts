//aqui nos dizemos ao react router onde esta o relacionamento 
//entre a rota e o arquivo
import {

    type RouteConfig,
    index,
    route
}from "@react-router/dev/routes";

export default [

    index ("routes/home.tsx"),

    route(
        "products",
        "routes/products.tsx"
    ),

    route(

        "products/:productId",
        "routes/product-details.tsx"
    ),

    route(
        "categories",
        "routes/categories.tsx"
    ),

    route (
        "categories/:categoryName",
        "routes/category-products.tsx"
    )
] satisfies RouteConfig;
