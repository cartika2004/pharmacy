import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponents"; // PASTIKAN NAMA INI SAMA DENGAN NAMA FILE

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    // Pindahkan fungsi fetch ke dalam useEffect
    const fetchProducts = async () => {
      const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
          console.log("Err: ", err);
        });
      dispatch(setProducts(response.data));
    };

    if (products.length === 0) {
      fetchProducts();
    }
  }, [dispatch, products.length]); // Daftarkan dependensi yang benar

  return (
    <div className="ui grid container">
      {products.map((product) => (
        <ProductComponent product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductListing;