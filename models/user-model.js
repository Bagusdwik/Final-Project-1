const pool = require("../connection/connection-setup");
const { v4: uuidv4 } = require("uuid");

class Users {
  static insertOne(email, password) {
    return new Promise((resolve, reject) => {
      pool
        .query(
          "INSERT INTO users(id,email,password) VALUES($1,$2,$3) RETURNING *",
          [uuidv4(), email, password]
        )
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static loginUser(email, password) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await pool.query(
          "SELECT * FROM users where email=$1 AND password=$2",
          [email, password]
        );

        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  }
}
module.exports = Users;
