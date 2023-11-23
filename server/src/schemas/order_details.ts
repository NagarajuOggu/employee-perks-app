import mongoose, { Schema } from "mongoose";

const OrderDetailsSchema: Schema = new Schema(
  {
    order_details: {
      type: "object",
      properties: {
        user_id: {
          type: "string",
        },
        location: {
          type: "string",
        },
        isAdminOverride: {
          type: "boolean",
        },
        seatNumber: {
          type: "string",
        },
        selectedMonth: {
          type: "string",
        },
        totalPurchasedPoints: {
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
          type: "object",
          properties: {
            "purchased-products": {
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
          required: ["purchased-products"],
        },
      },
      required: [
        "user_id",
        "location",
        "isAdminOverride",
        "seatNumber",
        "selectedMonth",
        "totalPurchasedPoints",
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
