import { cartService } from "../services/index.js";

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
    const { cartId } = req.params;
    const { productId } = req.body;
    try {
      await cartService.postProdsCart(cartId, productId);
      res.status(200).send("Producto añadido");

    } catch (error) {
      res.status(400).send(error.message);
    }
  }



/*   export async function deleteProductCart(req, res) {
    //const { cartId, productId } = req.params;
    const cartId = {_id: req.params.id}
    console.log(cartId)
    const productId = {_id: req.params.id_prod}
    console.log(productId)
    try {
      await cartService.deleteProductCart(cartId, productId);
      res.status(200).send("Producto eliminado");
    } catch (error) {
      res.status(400).send(error.message);
    }
  } */
