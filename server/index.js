import mongoose from "mongoose";
import express from "express";
import bodyParser, { json, urlencoded } from "body-parser";
import cors from "cors"
import empRoutes from './routes/emp.js'

import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(bodyParser.json({limit: "30mb", extended: true }))

//routes
app.use("/emp", empRoutes);

const port = process.env.PORT;
const CONNECTION_URL = process.env.DB;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => console.log(`Server Running on Port: http://localhost:${port}`)))
  .catch((error) => console.log(`${error} did not connect`));