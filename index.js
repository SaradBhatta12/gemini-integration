import "dotenv/config";
import express from "express";
import runModel from "./utils/google.js"; // This should point to your model logic
const app = express();

// Middleware for parsing JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Serve EJS templates from a 'views' directory
app.set("views", "./views");

// GET request to render the index view
app.get("/", (req, res) => {
  res.render("index", { message: "Welcome!" }); // Default message
});

// POST request handling
app.post("/", async (req, res) => {
  const { prompt } = req.body;

  // Simulate a response from runModel (replace with actual logic)
  const modelResponse = await runModel(prompt);
  console.log(modelResponse);

  // Pass a custom message and model response to the EJS template
  res.render("index", { message: `Response: ${modelResponse}` });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
