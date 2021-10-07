import { prodService } from "../services/index.js";
import { db } from "../db.js";

// creación de tabla
(async function () {
  try {
    const exist = await db.schema.hasTable("productos");
    console.log(exist);

    if (!exist) {
      await db.schema.createTable("productos", (table) => {
        table.increments("id").primary().notNullable();
        table.string("nombre", 40).notNullable();
        table.string("codigo", 40).notNullable();
        table.string("descripcion", 500).notNullable();
        table.float("precio").notNullable();
        table.string("foto", 500).notNullable();
        table.timestamps(true, true);
      });
      console.log("Tabla PRODUCTOS creada");
    }
  } catch (error) {
    console.log(error);
  }
})();

export async function createProduct(req, res) {
    const { body } = req;
    try {
      await prodService.createProduct(body);
      res.status(200).send("Producto creado");
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
  
  export async function getProducts(req, res) {
    try {
      const productos = await prodService.getProducts();
      res.status(200).json({ productos });
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  export async function getProductById(req, res) {
    const {id} = req.params
    try {
      const producto = await prodService.getProductById(id);
      res.status(200).json({ producto });
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
  
  export async function deleteProduct(req, res) {
      const {id} = req.params
      try {
          await prodService.deleteProduct(id)
          res.status(200).send('Producto eliminado')
      } catch (error) {
          res.status(400).send(error.message);
      }
  }
  
  export async function updateProduct(req, res)  {
      const {id} = req.params
      const {body} = req
  
      try {
          await prodService.updateProduct(id, body)
          res.status(200).send('Producto actualizado')
      } catch (error) {
          res.status(400).send(error.message);
      }
  }