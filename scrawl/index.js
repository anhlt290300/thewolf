const startBrowser = require("./browser");
const fs = require("fs");

const controller = require("./scraperController");

const express = require("express");

const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "*",
  credentails: true,
  optionSuccessStatus: 200,
  port: 3000,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/a", async (req, res) => {
  const browser = startBrowser();
  //const url = 'https://thewolf.vn/collections/shoes-for-decor'
  const data = await controller.scraperController_Shoes(browser);
  res.status(200).json(data);
});

app.get("/abc", async (req, res) => {
  const browser = startBrowser();
  const url = 'https://thewolf.vn/'
  const data = await controller.scraperController_Header(browser, url);
  res.status(200).json(data);
});



app.listen(4000, () => {
  console.log("server listen at http://localhost:4000");
});
