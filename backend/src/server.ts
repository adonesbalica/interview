import express from "express";
import { ENV } from "./lib/env.js";
import path from "node:path";

const PORT = Number(ENV.PORT ?? 3000);

const app = express();

const __dirname = path.resolve();

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Ok" });
});

app.get("/books", (req, res) => {
  res.status(200).json({ message: "Books Endpoint" });
});

// make ready for deploy
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
