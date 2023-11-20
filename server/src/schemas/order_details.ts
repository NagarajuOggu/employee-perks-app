import mongoose, { Schema } from "mongoose";

const OrderDetailsSchema: Schema = new Schema(
  {
    order_details: {
      type: "object",
      properties: {
        first_name: {
          type: "string",
        },
        last_name: {
          type: "string",
        },
        role: {
          type: "string",
        },
        total_EPP_month: {
          type: "number",
        },
        address: {
          type: "object",
          properties: {
            country: {
              type: "string",
            },
            phone: {
              type: "string",
            },
            address1: {
              type: "string",
            },
            address2: {
              type: "string",
            },
            zipcode: {
              type: "string",
            },
            city: {
              type: "string",
            },
            statecode: {
              type: "string",
            },
          },
          required: [
            "country",
            "phone",
            "address1",
            "address2",
            "zipcode",
            "city",
            "statecode",
          ],
        },
        EPP: {
          type: "array",
          items: {
            type: "object",
            properties: {
              month: {
                type: "string",
              },
              points: {
                type: "string",
              },
              purchased_products: {
                type: "object",
                properties: {
                  category: {
                    type: "string",
                  },
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
                        purchased_qty: {
                          type: "number",
                        },
                      },
                      required: ["name", "points", "purchased_qty"],
                    },
                  },
                },
                required: ["category", "color", "products"],
              },
            },
            required: ["month", "points", "purchased-products"],
          },
        },
      },
      required: [
        "first_name",
        "last_name",
        "role",
        "total-EPP-month",
        "address",
        "EPP",
      ],
    },
    required: ["order_details"],
  },
  { timestamps: true }
);
const orderDetailsModel = mongoose.model("OrderDetails", OrderDetailsSchema);

export default orderDetailsModel;
