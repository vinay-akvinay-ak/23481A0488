const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend API Running Successfully");
});

app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Test API Working"
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});