import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";

const Products = () => {
  const { productData } = useContext(ProductContext);

  return (
    <div>
      {productData.map((elem) => (
        <Link key={elem.id} to={`/products/${elem.id}`}>
          <div>
            <img src={elem.image} alt={elem.title} width="150" />
            <h2>{elem.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
