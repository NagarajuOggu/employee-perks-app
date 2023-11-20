import mongoose, { Schema } from "mongoose";

const ProductSchema: Schema = new Schema(
  {
    productsCategories: {
      type: "array",
      items: {
        type: "object",
        properties: {
          "us-products": {
            type: "object",
            properties: {
              color: {
                type: "string",
              },
              products: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    name: {
                      type: "string",
                    },
                    points: {
                      type: "string",
                    },
                    availability: {
                      type: "number",
                    },
                  },
                  required: ["name", "points", "availability"],
                },
              },
            },
            required: ["color", "products"],
          },
        },
        required: ["us-products"],
      },
    },
    required: ["productsCategories"],
  },
  { timestamps: true }
);

const productModal = mongoose.model("Product", ProductSchema);
export default productModal;
