import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(
  express.json({
    extended: true,
    limit: "30mb",
  })
);
app.use(
  express.urlencoded({
    extended: true,
    limit: "30mb",
  })
);
app.use(cors());

app.use("/posts", postRoutes);

const CONNECTION_URL = "mongodb://localhost:27017/fullstack-mern";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  })
  .catch((error) => console.log(error.message));
