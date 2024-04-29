const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const testRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(5000, () => {
  console.log("server started on port 5000");
});
