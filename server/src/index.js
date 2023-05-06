import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import userRouter from "./routes/users.js";
import connect from "../database/database.js";
import checkToken from "./authentication/auth.js";

const app = express();
app.use(express.json());

const port = process.env.PORT ?? 3000;

app.use("/user", userRouter);
app.use(checkToken); //shield, guard

app.get("/", (req, res) => {
  res.send("thewolf");
});

app.listen(port, async () => {
  await connect();
  console.log(`server listen at http://localhost:${port}`);
});
