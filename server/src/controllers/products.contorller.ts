import { Response, Request, response } from "express";
import productModal from "../schemas/product";

const insertProduct = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    console.log(body);
    const newProduct = new productModal(body);

    const result = await newProduct.save();

    res.status(201).json({ message: "Product added succesfully" });
  } catch (error) {
    res.send(error);
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const productList = await productModal.find();
    res.status(200).json({ productsCategories: productList[0].productsCategories[0] });
  } catch (error) {
    res.send(error);
  }
};

const updateProduct = async (req: Request, res: Response, next: any) => {
  try {
    const { id } = req.params;
    const requestList = await productModal.findOneAndUpdate(
      { _id: id },
      req.body
    );
    res.status(200).json({ requestList: requestList });
  } catch (error) {
    res.send(error);
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await productModal.findOneAndDelete({ _id: id });
    const requestList = await productModal.find();
    res.status(200).json({ requestList: requestList });
  } catch (error) {
    res.send(error);
  }
};

const productController = {
  insertProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};

export default productController;
