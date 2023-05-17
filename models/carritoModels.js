const db = require('../db/config');
class Carrito {
      
      async createCarrito(carrito) {
        try {
            const statement = `INSERT INTO carrito (producto_id, cantidad)
                                VALUES ($1, $2) RETURNING *`;
    
            const values = [carrito.producto_id, carrito.cantidad];
    
            const result = await db.query(statement, values);
    
            if (result.rows.length > 0) {
                return result.rows[0];
            } else {
                return null;
            }
        } catch(err) {
            throw new Error(err);
        }
    }
    

}

module.exports = new Carrito();