import { Response, Request, response } from "express";
import orderDetailsModel from "../schemas/order_details";

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orderDetails = await orderDetailsModel.find();
    res.status(200).json({ orderDetails: orderDetails });
  } catch (error) {
    res.send(error);
  }
};

const createNewOrder = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const newOrder = new orderDetailsModel(body);
    const result = await newOrder.save();
    res.status(201).json({ message: "Order placed succesfully" });
  } catch (error) {
    res.send(error);
  }
};

const updateOrder = async (req: Request, res: Response, next: any) => {
  try {
    const { id } = req.params;
    const updateOrderDetails = await orderDetailsModel.findOneAndUpdate(
      { _id: id },
      req.body
    );
    res.status(200).json({ updateOrderDetails: updateOrderDetails });
  } catch (error) {
    res.send(error);
  }
};

const deleteOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await orderDetailsModel.findOneAndDelete({ _id: id });
    const requestList = await orderDetailsModel.find();
    res.status(200).json({ requestList: requestList });
  } catch (error) {
    res.send(error);
  }
};

const OrderDetailsController = {
  getAllOrders: getAllOrders,
  createNewOrder: createNewOrder,
  deleteOrder: deleteOrder,
  updateOrder: updateOrder,
};

export default OrderDetailsController;
