const router = require("express").Router;
const {
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} = require("../controllers/product.controller");

const productRouter = router();

productRouter.get("/", getProduct);

productRouter.post("/", createProduct);

productRouter.patch("/", updateProduct);

productRouter.delete("/", deleteProduct);

module.exports = productRouter;
