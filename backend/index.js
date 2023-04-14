import express from "express";
import cors from "cors";
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({

})

const app = express();

app.listen(process.env.PORT);