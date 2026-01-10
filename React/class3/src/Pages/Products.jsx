import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Products = () => {
  const productData = useContext(ProductContext);
  const navigate = useNavigate();

  if (!productData || productData.length === 0) {
    return (
      <div className="text-center text-xl text-white mt-20">
        Loading products...
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-sky-500 via-purple-600 to-pink-500 p-8"
    >
      <h1 className="text-4xl font-extrabold text-white text-center mb-12">
        Products
      </h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
      >
        {productData.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            whileHover={{ y: -12, scale: 1.05 }}
            onClick={() => navigate(`/product/${item.id}`)} // Navigate on click
            className="cursor-pointer group bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-5 shadow-2xl"
          >
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="h-52 flex items-center justify-center overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full object-contain"
              />
            </motion.div>

            {/* Title */}
            <h2 className="text-white text-sm font-semibold mt-5 line-clamp-2">
              {item.title}
            </h2>

            {/* Price */}
            <p className="text-2xl font-bold mt-3 text-yellow-300">
              ₹ {Math.round(item.price * 80)}
            </p>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent navigating when clicking button
                alert("Added to Cart");
              }}
              className="mt-4 px-5 py-2 rounded-full font-semibold text-black 
              bg-gradient-to-r from-yellow-400 to-orange-500
              hover:from-orange-500 hover:to-yellow-400
              transition-all duration-300 text-sm"
            >
              Add to Cart
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Products;
