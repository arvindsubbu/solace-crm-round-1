const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/db");
const authRoutes = require("./routes/auth.routes");
const verifyToken = require("./middleware/auth.middleware");
const agentRoutes = require("./routes/agent.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/agents", verifyToken, agentRoutes);

app.get("/", (req, res) => {
  res.send("CRM API Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));