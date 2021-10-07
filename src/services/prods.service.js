import { db } from "../db.js";

export async function createProduct(data) {
  try {
    await db("productos").insert(data);
  } catch (error) {
    throw new Error(error);
  }
}

export async function getProducts() {
  try {
    const productos = await db.select("id","nombre").from("productos");
    return productos;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getProductById(id) {
  try {
    const producto = await db.select().from("productos").where("id", id);
    return producto;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteProduct(id) {
  try {
    await db("productos").del().where("id", id);
    return;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateProduct(id, data) {
  try {
    await db("productos").update(data).where("id", id);
    return;
  } catch (error) {
    throw new Error(error);
  }
}
