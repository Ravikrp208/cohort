import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

// Create context
export const ProductContext = createContext();

// Context Provider Component
const ProductProvider = (props ) => {
  const [productData, setProductData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProductData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ProductContext.Provider value={productData }>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
