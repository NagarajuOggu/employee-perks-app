import userModel from "../schemas/user";
import { Response, Request, response } from "express";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userModel.find();
    res.status(200).json({ users: users });
  } catch (error) {
    res.send(error);
  }
};

const createNewUser = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const userProfile = new userModel(body);
    const result = await userProfile.save();

    res.status(201).json({ message: "User added succesfully" });
  } catch (error) {
    res.send(error);
  }
};

const updateUser = async (req: Request, res: Response, next: any) => {
  try {
    const { id } = req.params;
    const user = await userModel.findOneAndUpdate({ _id: id }, req.body);
    res.status(200).json({ user: user });
  } catch (error) {
    res.send(error);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await userModel.findOneAndDelete({ _id: id });
    const requestList = await userModel.find();
    res.status(200).json({ requestList: requestList });
  } catch (error) {
    res.send(error);
  }
};

const userController = {
  getAllUsers,
  createNewUser,
  deleteUser,
  updateUser,
};

export default userController;
