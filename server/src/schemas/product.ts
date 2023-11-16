import mongoose, { Schema } from "mongoose";

const ProductSchema: Schema = new Schema(
  {
    productsData: {
      type: "array",
      items: {
        type: "object",
        properties: {
          category: {
            type: "string",
          },
          color: {
            type: "string",
          },
          product: {
            type: "array",
            items: [
              {
                type: "object",
                properties: {
                  productName: {
                    type: "string",
                  },
                  points: {
                    type: "string",
                  },
                  qty: {
                    type: "integer",
                  },
                },
                required: ["productName", "points", "qty"],
              },
            ],
          },
        },
        required: ["category", "color", "product"],
      },
    },
    required: ["productsData"],
  },
  { timestamps: true }
);

const productModal = mongoose.model("Product", ProductSchema);
export default productModal;
