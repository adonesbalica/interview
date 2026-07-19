import express from "express";
import { ENV } from "./lib/env.js";

const PORT = Number(ENV.PORT ?? 3000);

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Ok" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
