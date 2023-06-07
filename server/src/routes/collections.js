import express from "express";
import { collectionsController } from "../controllers/index.js";
const collectionsRouter = express.Router();


collectionsRouter.get("/:type", collectionsController.getProductByType);


export default collectionsRouter;
