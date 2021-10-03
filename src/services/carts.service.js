import { db } from "../db.js";

export async function createCart(data) {
  try {
    const cart = await db("carrito").insert(data);
    return cart;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getCart(id) {
  try {
    let cart = await db("carrito-producto").select().where("cp_carrito", id);
    if (!cart) throw new Error("Carrito inexistente");
    return cart;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteCart(id) {
  try {
    await db("carrito-producto").del().where("cp_carrito", id);
    await db("carrito").del().where("id", id);
    return;
  } catch (error) {
    throw new Error(error);
  }
}

export async function postProdsCart(cartId, productId) {
  try {
    /* let cart = await db('carrito').select().where("id", cartId);
    if (!cart) throw new Error("Carrito inexistente");

    let product = await db('productos').select().where("id", productId)
    if (!product) throw new Error("Producto no encontrado"); */

    /* const cartWithProds = await db('buyList').insert(productId).where("cart_id" === cartId)
    console.log(cartWithProds);
    return cartWithProds */

    const prodInCart = await db("carrito_producto").insert(cartId, productId);
    return prodInCart;
  } catch (error) {
    throw new Error(error);
  }
}

/*  export async function deleteProductCart(cartId, productId) {
    try {
      const cart = await contCarritos.getDB().select().where("id", cartId);
      console.log(cart)
      if (!cart) throw new Error("Carrito inexistente");
  
      const producto = await prodsModel.default.findOne({ productId });
      console.log(producto)
  
      if (cart.cartProducts.includes(producto)) {
        cart.cartProducts.remove(producto);
      } 
      await cart.save();
      return cart;
    } catch (error) {
      throw new Error(error);
    }
  } */
