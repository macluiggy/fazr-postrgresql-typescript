import express from "express";
const app = express();

import indexRoutes from "./routes/index.routes";

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello");
});

app.use(indexRoutes);

var port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
