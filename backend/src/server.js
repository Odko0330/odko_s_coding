import express from "express";

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.json());

app.get("/api/health", (_request, response) => {
  response.json({ status: "ok", service: "personal-todo-api" });
});

app.listen(port, () => {
  console.log(`Todo API listening at http://localhost:${port}`);
});
