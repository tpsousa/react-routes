import {Link} from "react-router";
import type { ProductDTO } from "~/models/product"

type Props = {

    product : ProductDTO;
};

export default function ProductDTO ({product} : Props){

    return (

        <div>

          <img
          
            src = {product.imgUrl}
            alt = {product.name}
            width="250" 
          
          />
          
          <h2>{product.name}</h2>

          <p>

            R$ {product.price.toFixed(2)}
          </p>

          <Link to= {`/products/${product.id}`}>
               
               Ver detalhes
          </Link>
        </div>
    )
}