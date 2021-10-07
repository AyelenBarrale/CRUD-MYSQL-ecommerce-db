import { db } from "../db.js";

export async function createCart(data) {
  try {
    const cart = await db("carritos").insert(data);
    return cart;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getCart(id) {
  try {
    const cart = await db("carritos").select().where("id", id);
    if (!cart) throw new Error("Carrito inexistente");
    return cart;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteCart(id) {
  try {
    const cart = await db("carritos").del().where("id", id);
    return cart;
  } catch (error) {
    throw new Error(error);
  }
}

export async function postProdsCart(c_id, p_id) {
  try {
    const prodInCart = await db("carritos_productos").insert({
      cart_id: c_id,
      product_id: p_id
    })
    return prodInCart;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteProductCart(cartId, productId) {
  try {
  } catch (error) {
    throw new Error(error);
  }
}
