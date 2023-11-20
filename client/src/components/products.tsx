import { useEffect, useState } from "react";

import ProductDetails from "./ProductDetail";
import { get } from "../axios";

const mockData = {
  productsList: [
    {
      category: "usProducts",
      color: "red",
      products: [
        {
          productName: "productName",
          points: "2points",
          qty: 5,
        },
        {
          productName: "productName",
          points: "2points",
          qty: 5,
        },
      ],
    },
    {
      category: "redefined",
      color: "blue",
      products: [
        {
          productName: "productName",
          points: "2points",
          qty: 5,
        },
        {
          productName: "productName",
          points: "2points",
          qty: 5,
        },
      ],
    },
    {
      category: "japanProducts",
      color: "green",
      products: [
        {
          productName: "productName",
          points: "2points",
          qty: 5,
        },
        {
          productName: "productName",
          points: "2points",
          qty: 5,
        },
      ],
    },
    {
      category: "pro skincare tools",
      color: "pink",
      products: [
        {
          productName: "productName",
          points: "2points",
          qty: 5,
        },
        {
          productName: "productName",
          points: "2points",
          qty: 5,
        },
      ],
    },
  ],
};

const Products = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
     get("products/getAllProducts").then((resp)=>{
      setProducts(resp.data.productsCategories as any);
    });
  }, []);
  return (
    <>
      <div className="border bg-gray-100">
        {products &&
          Object.entries(products).map(([category,product],i)=>{
            return (
              <ProductDetails category={category} item={product} key={i} setProducts={setProducts} />
            );
          })
        }    
      </div>
    </>
  );
};

export default Products;
