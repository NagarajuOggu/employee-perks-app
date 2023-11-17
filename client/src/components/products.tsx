import { useState } from "react";

import ProductDetails from "./ProductDetail";

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
  const [products,setProducts]=useState(mockData.productsList)
  return (
  <>
      {products?.map((product: any, i: number) => {
        return <ProductDetails item={product} key={i} />
      })
    }
  </>
  );
};

export default Products;
