import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const ProductDetails = ({item}:any) => {
   console.log(item)
  return (
    <Accordion >
          <AccordionSummary
            style={{ backgroundColor: item?.color }}
            className='flex justify-center'
          >
            <Typography variant="h6" className='text-white '>
              {item?.category}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="flex flex-col gap-4 p-0">
            {item?.products.map((product:any, productIndex:any) => (
              <div key={productIndex} className="grid grid-cols-2 gap-4 border-b-2 pt-3 pb-3">
              <Typography className='bg-white flex align-middle'>({product.points} PTS){product.productName}</Typography>
              <div className='flex items-end'>
              <input type="text" name="seat" id="seat#" className='border bg-white ml-1 w-1/2' value={product.qty} />
                   <span className='pl-1'>item(s)</span></div>
            </div>
            ))}
          </AccordionDetails>
        </Accordion>
  );
};

export default ProductDetails;
