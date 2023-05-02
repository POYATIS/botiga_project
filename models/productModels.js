const db = require('../db/config');
class Product {

    /**
     * Returns all products in the database
     *
     * @return {Array|null} the product(s), if there are any on the database
     */
    async getAll() {
        try {
            const statement = `SELECT *
                                FROM producto`;

            const result = await db.query(statement);

            if (result.rows.length > 0) {
                return result.rows;
            } else {
                return null;
            }
        } catch(err) {
            throw new Error(err);
        }
    }

    async findByPk(id) {
        try {
          const statement = 'SELECT * FROM producto WHERE id = $1';
          const result = await db.query(statement, [id]);
    
          if (result.rows.length > 0) {
            return result.rows[0];
          } else {
            return null;
          }
        } catch (err) {
          throw new Error(err);
        }
      }

}

module.exports = new Product();