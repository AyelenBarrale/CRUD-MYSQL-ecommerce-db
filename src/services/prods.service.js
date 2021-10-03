import { db } from "../db.js";

export async function createProduct(data) {
  try {
    await db('producto').insert(data);
  } catch (error) {
    throw new Error(error);
  }
}

export async function getProducts() {
  try {
    const productos = await db.select().from('producto');
    return productos;
  } catch (error) {
    throw new Error(error);
  }
}


export async function getProductById(id) {
  try {
    const producto = await db.select().from('producto').where("id", id);
    return producto;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteProduct(id) {
  try {
    await db('producto').del().where("id", id);
    return;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateProduct(id, data) {
  try {
    await db('producto').update(data).where("id", id);
    return;
  } catch (error) {
    throw new Error(error);
  }
}
