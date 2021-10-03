import express from "express";
import { cartController } from "../controllers/index.js";

const router = new express.Router();

router.get("/:id/productos", cartController.getCart);
router.post("/", cartController.createCart);
router.delete("/:id", cartController.deleteCart);
router.post("/:id/productos", cartController.postProdsCart);
//router.delete("/:id/productos/:id_prod", cartController.deleteProductCart);

export { router };