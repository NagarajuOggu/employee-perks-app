import { Router } from "express";
import productController from "../controllers/products.contorller";


const productRoute: Router = Router();

productRoute.get("/getAllProducts", productController.getAllProducts);

productRoute.post("/insertProduct", productController.insertProduct);

productRoute.put("/:id", productController.updateProduct);

productRoute.delete("/:id", productController.deleteProduct);

export default productRoute;
