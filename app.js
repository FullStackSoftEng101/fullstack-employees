import express from "express";
const app = express();
export default app;

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next(); // <-- REQUIRED
});

app.get("/", (req, res) => {
  res.send("Welcome to the Fullstack Employees API.");
});
// Correct router import
import employeesRouter from "./api/employees.js";

// Parse JSON bodies
app.use(express.json());

// Mount router
app.use("/employees", employeesRouter);

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Sorry! Something went wrong :(");
});
