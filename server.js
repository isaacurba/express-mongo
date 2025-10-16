const express = require("express");
const dotenv = require("dotenv");
const connectedDB = require("./config/db")

dotenv.config();

const app = express();

// Middleware 
app.use(express.json());

//CONNECT DB
connectedDB();

// ROUTES
app.use("/students", require("./routes/studentRoutes"));

// DEFAULT ROUTE
app.use("/", (req, res) => {
  res.send("API server is up and running........");
});

// START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});