import React, { useEffect, useState } from "react";
import { getProduct } from "../../services/api/product/getProduct";

const About = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const data = await getProduct();
        setProducts([...data.products]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div
          style={{ height: "300px", width: "300px", background: "red" }}
        ></div>
      ) : (
        products.map((product, index) => {
          return <div key={index}>{product.title}</div>;
        })
      )}
    </div>
  );
};

export default About;
