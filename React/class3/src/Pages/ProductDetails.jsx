import React, { useContext, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import { gsap } from "gsap";

const ProductDetails = () => {
  const { id } = useParams();
  const products = useContext(ProductContext);
  const product = products.find((p) => p.id === parseInt(id));

  const cardRef = useRef(null);

  // GSAP animation

  useEffect(() => {
    if (cardRef.current) {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, [cardRef]);

  if (!product)
    return (
      <div className="text-white text-center mt-20 text-xl">
        Loading product details...
      </div>
    );
    

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 flex justify-center items-center p-8">
      <div
        ref={cardRef}
        className="max-w-4xl w-full bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row gap-6"
      >
        {/* Product Image */}
        <div className="md:w-1/2 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 md:h-96 object-contain rounded-xl"
          />
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 flex flex-col justify-between text-white">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
              {product.title}
            </h1>
            <p className="text-yellow-300 text-2xl font-bold mb-4">
              ₹ {Math.round(product.price * 80)}
            </p>
            <p className="text-lg text-gray-100 leading-relaxed mb-6">
              {product.description}
            </p>
          </div>

          <div className="flex gap-4">
            <button
              className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-yellow-400 to-orange-500
                hover:from-orange-500 hover:to-yellow-400 transition-all duration-300 text-black"
            >
              Add to Cart
            </button>
            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 rounded-full font-semibold bg-white/30 backdrop-blur-md
                hover:bg-white/50 transition-all duration-300 text-black"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
