const pool = require('../utils/pool');
module.exports = class CartoonCat {
  // TODO -- fill in this class!
  constructor(row) {
    // const { id, name, type, url, year, lives, isSidekick } = row;
    (this.id = row.id), (this.name = row.name);
    this.type = row.type;
    this.url = row.url;
    this.year = row.year;
    this.lives = row.lives;
    this.isSidekick = row.isSidekick;
    // console.log()
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from cartoon_cats');
    return rows.map((catRow) => new CartoonCat(catRow));
  }
};
