const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Import and use the API routes
const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

const generateRoute = require("./routes/generate");
app.use("/api", generateRoute);


app.get("/", (req, res) => {
  res.send("✅ CodePromptEval backend is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening at http://localhost:${PORT}`);
});
