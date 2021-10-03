import express from "express";
import { prodController } from "../controllers/index.js";

const router = new express.Router();

//Middlewares
//import {isAdmin} from "../middlewares/adminMiddleware.js";

router.get("/", prodController.getProducts);
router.get("/:id?", prodController.getProductById);
router.post("/", /* isAdmin, */ prodController.createProduct);
router.put("/:id", /* isAdmin, */ prodController.updateProduct);
router.delete("/:id", /* isAdmin, */ prodController.deleteProduct);

export { router  };