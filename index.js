const express = require("express");
const userRouter = require("./routes/users.route");
const productRouter = require("./routes/products.route");
const app = express();

app.use("/users", userRouter);

app.use("/products", productRouter);

app.listen(4000, (err) => {
  console.log(" Server listening on http://localhost:4000");
});
