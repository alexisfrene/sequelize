const express = require("express");
const { sequelize } = require("./src/db/db.js");
require("dotenv").config();
const { PORT } = process.env;
const app = express();

try {
  sequelize.sync();
  app.listen(PORT, (e) => {
  console.log(`Express funcionando en PUERTO ${PORT}`);
})
} catch (error) {
    console.log(error.message)
};
