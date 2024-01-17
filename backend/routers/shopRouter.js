const express = require("express");
const {
  createProduct,
  deleteProduct,
  updateProduct,
  findAllProduct,
  findById,
  searchTitle,
} = require("../controllers/shopController.js");
const app = express.Router();

app.post("/", createProduct);
app.get("/", findAllProduct);
app.delete("/:id", deleteProduct);
app.put("/:id", updateProduct);
app.get("/:id", findById);
app.get("/:searchTerm", searchTitle);

module.exports = app;
