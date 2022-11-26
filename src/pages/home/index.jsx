import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../services/api";
import { Navbar,  CardHistory } from "../../components";


const HomePage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const url = "/users";
      const response = await api.get(url);
      const payload = [...response?.data];
      console.log(payload);
      setProducts(payload || []);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-16"></div>

      <CardHistory key={products?.id} onClick={products.id} />
    </>
  );
};

export default HomePage;
