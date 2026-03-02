const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/db");
const authRoutes = require("./routes/auth.routes");
const verifyToken = require("./middleware/auth.middleware");

const app = express();

app.use(cors());
app.use(express.json());
app.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "You accessed a protected route!", user: req.user });
});
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("CRM API Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));