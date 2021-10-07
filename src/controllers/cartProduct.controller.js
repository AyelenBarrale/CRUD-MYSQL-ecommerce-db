import { db } from "../db.js";

// creación de tabla
(async function () {
  try {
    const exist = await db.schema.hasTable("carritos_productos");
    console.log(exist);

    if (!exist) {
      await db.schema.createTable("carritos_productos", (table) => {
        table.integer("cart_id").unsigned();
        table
          .foreign("cart_id")
          .references("carritos.id")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
          table.integer("product_id").unsigned();
        table
          .foreign("product_id")
          .references("productos.id")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
          table.primary(["cart_id", "product_id"])
      });
      console.log("Tabla CARRITOS_PRODUCTOS creada");
    }
  } catch (error) {
    console.log(error);
  }
})();


