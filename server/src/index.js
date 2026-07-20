require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const healthRoutes = require("./routes/health");
// const weatherRoutes = require("./routes/weather");
// const seaRoutes = require("./routes/sea");
// const tideRoutes = require("./routes/tide");
// const daylightRoutes = require("./routes/daylight");
// const suggestionRoutes = require("./routes/suggestion");
// const authRoutes = require("./routes/auth");
// const portsRoutes = require("./routes/ports");
// const catchLogRoutes = require("./routes/catchLog");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/health", healthRoutes);
// app.use("/weather", weatherRoutes);
// app.use("/sea", seaRoutes);
// app.use("/tide", tideRoutes);
// app.use("/daylight", daylightRoutes);
// app.use("/suggestion", suggestionRoutes);
// app.use("/auth", authRoutes);
// app.use("/ports", portsRoutes);
// app.use("/catch-log", catchLogRoutes);

connectDB();

app.listen(5000, () => console.log("Backend running on port 5000"));