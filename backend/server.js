require("dotenv").config();
const express = require("express");
const cors = require("cors");
const contactRoute = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 5001;

// Allow the frontend (configurable origin) to call this API.
const allowedOrigin = process.env.CLIENT_ORIGIN || "*";
app.use(cors({ origin: allowedOrigin }));
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({ status: "ok", service: "rg-suppliers-backend" });
});

app.use("/api/contact", contactRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
