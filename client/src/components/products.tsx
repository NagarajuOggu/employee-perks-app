//import { useEffect, useState } from "react";

import ProductDetails from "./ProductDetail";
import { get } from "../axios";


const Products = ({products,setProducts}) => {

  return (
    <>
      <div className="border bg-gray-100">
        {products &&
          Object.entries(products).map(([category,product],i)=>{
            return (
              <ProductDetails category={category} item={product} index={i} setProducts={setProducts} />
            );
          })
        }    
      </div>
    </>
  );
};

export default Products;
