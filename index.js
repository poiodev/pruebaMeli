import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import team from "./src/routes/team.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api/team", team);

app.listen(PORT, () => {
  console.log(`Server running in port: ${PORT}`);
});
