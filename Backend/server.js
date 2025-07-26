const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes");
const PORT = process.env.port || 5000;

const app = express();

app.use(express.json());

const db_URI =
  "mongodb+srv://emmy:emmy010906@cluster1.cb4slnr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
mongoose
  .connect(db_URI)
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log(error));

app.use(cors());

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
