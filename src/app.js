import express from "express";
import { prodRouter, cartRouter } from "./routers/index.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/productos", prodRouter.router);
app.use("/api/carrito", cartRouter.router);

export { app };
