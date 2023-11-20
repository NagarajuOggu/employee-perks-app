import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const ProductDetails = ({ item, setProducts, category }: any) => {
  return (
    <Accordion>
      <AccordionSummary
        style={{ backgroundColor: item?.color }}
        className="flex justify-center"
      >
        <Typography variant="h6" className="text-white bolder font-bold">
          {category.toUpperCase()}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="flex flex-col  p-0 ">
        {item?.products.map((product: any, productIndex: any) => (
          <div
            key={productIndex}
            className="grid grid-cols-3  border-b-2 bg-gray-100 "
          >
            <Typography className="bg-white flex align-middle p-1 pl-6">
              ({product.points} PTS){product.name}
            </Typography>
            <div className="flex items-end">
              <input
                type="text"
                name="seat"
                className="border bg-white ml-1 mt-1 w-1/2 mb-1 border-r-2"
                value={product.points}
              />
              <span className="pl-1">item(s)</span>
            </div>
          </div>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default ProductDetails;
