import express from "express";
import mongoose from "mongoose";
import cors from "cors";

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
