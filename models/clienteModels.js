const db = require('../db/config');
class Cliente {
      
      async create(cliente) {
        try {
            const statement = `INSERT INTO cliente (nombre, apellidos, email, telefono, direccion)
                                VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    
            const values = [cliente.nombre, cliente.apellidos, cliente.email, cliente.telefono, cliente.direccion];
    
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

module.exports = new Cliente();