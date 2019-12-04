const mongoose = require("mongoose");

class Db {
  constructor() {
    this.uri = process.env.CONNECTION_STRING || "mongodb://127.0.0.1:27017";
    this.options = {
      useUnifiedTopology: true,
      dbName: "mydb",
      useNewUrlParser: true
    };

    this._connect();
  }

  _connect() {
    mongoose.connect(this.uri, this.options);
    console.log("Database connected");
  }

  closeConnection() {
    return new Promise((resolve, reject) => {
      try {
        mongoose.connection.close(() => {
          resolve();
        });
      } catch (e) {
        reject(e);
      }
    });
  }
}

module.exports = new Db();
