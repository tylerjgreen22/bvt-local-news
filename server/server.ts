import { log } from "console";
import express from "express";
import { router as articles } from "./controllers/articlesController";

const app = express();

const port = 3000;

app.use("/api/articles", articles);

app.listen(port, () => {
  log(`Server running on ${port}`);
});
