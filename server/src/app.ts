import express, { Express } from "express";
import mongoose from "mongoose";
import productRoute from "./routes/product";
import userRoute from "./routes/user";
import ordersDetailsRoute from "./routes/order_details.controller";
var bodyParser = require("body-parser");
const app: Express = express();
const PORT: string | number = process.env.PORT || 4000;
const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@productscluster.nlkwcu6.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});
app.use("/users", userRoute);
app.use("/products", productRoute);
app.use("/orders", ordersDetailsRoute);

mongoose.set("strictQuery", false);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
console.log(uri);
mongoose
  .connect(uri, {
    socketTimeoutMS: 1000,
    // Note that mongoose will **not** pull `bufferCommands` from the query string
  })
  .then(
    () => {
      console.log("MongoDB connected!");
    },
    (err) => {
      /** handle initial connection error */
      console.log(err);
    }
  );

module.exports = mongoose;
