import React, { useState, useEffect } from "react";
import Banner from "../components/banner/Banner";
import Product from "../components/product/Product";
import Api from "../axios/Api";
import "../styles/Home.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsStart } from "../redux/products/productSlice";
import { fetchProductsSuccsess } from "../redux/products/productSlice";
import { feathProductsFail } from "../redux/products/productSlice";

const Home = () => {
  const [products, setProducts] = useState([]);

  const { list, error, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  async function getProducts() {
    dispatch(fetchProductsStart());

    try {
      const res = await Api.get("/products");
      console.log(res);
      setProducts(res.data);
      // dispatch(fetchProductsSuccsess(res.data));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);
  if (error) {
    return <div>{error}</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <Banner />
      <div className="products">
        {products?.map((item) => (
          <Product key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
