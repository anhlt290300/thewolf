import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import {
  userRouter,
  productRouter,
  collectionsRouter,
  voucherRouter,
} from "./routes/index.js";
import connect from "../database/database.js";
import checkToken from "./authentication/auth.js";
import cors from "cors";

const corsOptions = {
  origin: "*",
  credentails: true,
  optionSuccessStatus: 200,
  port: 3000,
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

const port = process.env.PORT ?? 3000;

app.use("/user", userRouter);
app.use("/products", productRouter);
app.use("/collections", collectionsRouter);
app.use("/voucher", voucherRouter);
app.use(checkToken); //shield, guard
app.get("/", (req, res) => {
  res.send("thewolf");
});

connect()
  .then(() => {
    app.listen(port, async () => {
      console.log(`server listen at http://localhost:${port}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
