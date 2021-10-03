import { prodService } from "../services/index.js";

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