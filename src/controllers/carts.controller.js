import { cartService } from "../services/index.js";
import { db } from "../db.js";

// creación de tabla
(async function () {
  try {
    const exist = await db.schema.hasTable("carritos");
    console.log(exist);

    if (!exist) {
      await db.schema.createTable("carritos", (table) => {
        table.increments("id").primary().notNullable();
        table.string("userName", 40).notNullable();
        table.timestamps(true, true);
      });
      console.log("Tabla CARRITOS creada");
    }
  } catch (error) {
    console.log(error);
  }
})();

export async function createCart(req, res) {
  const { body } = req;
  try {
    const cart = await cartService.createCart(body);
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function getCart(req, res) {
  const { id } = req.params;
  try {
    const cart = await cartService.getCart(id);
    res.status(200).json({ cart });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function deleteCart(req, res) {
  const { id } = req.params;
  try {
    await cartService.deleteCart(id);
    res.status(200).send("Carrito eliminado");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function postProdsCart(req, res, next) {
  const { id } = req.params;
  const { productId } = req.body;
  try {
    await cartService.postProdsCart(id, productId);
    res.status(200).send("Producto añadido");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function deleteProductCart(req, res) {
  //const { cartId, productId } = req.params;
  const cartId = { _id: req.params.id };

  const productId = { _id: req.params.id_prod };

  try {
    await cartService.deleteProductCart(cartId, productId);
    res.status(200).send("Producto eliminado");
  } catch (error) {
    res.status(400).send(error.message);
  }
}
