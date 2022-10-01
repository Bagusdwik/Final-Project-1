const pool = require("../connection/connection-setup");
const { v4: uuidv4 } = require("uuid");
const { type } = require("express/lib/response");
const res = require("express/lib/response");
class Reflection {
  insertOne(a) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await pool.query(
          `INSERT INTO reflection(id,success,low_point,take_away,owner_id,created_date,modified_date)
         VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *`,
          [
            uuidv4(),
            a.success,
            a.low_point,
            a.take_away,
            a.owner_id,
            a.created_date,
            a.modified_date,
          ]
        );

        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  }

  findAll(condition) {
    //mencari keseluruhan data berdasarkan where condition
    //not yet implemented

    return new Promise(async (resolve, reject) => {
      try {
        const { rows } = await pool.query(
          "SELECT * FROM reflection where owner_id=$1",
          [condition]
        );
        resolve(rows);
      } catch (err) {
        reject(err);
      }
    });
  }

  deleteOne(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await pool.query(
          "DELETE FROM reflection where id=$1 RETURNING *",
          [id]
        );
        resolve(result);
      } catch (err) {
        reject("Data not found");
      }
    });
  }
}

module.exports = new Reflection();
