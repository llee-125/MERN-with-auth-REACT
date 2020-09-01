const express = require("express");
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/react-auth";
const PORT = process.env.PORT || 5000;
const cors = require("cors");
require("dotenv");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established.");
  }
);

app.use("/users", require("./routes/userRouter"));
app.use("/todos", require("./routes/todoRouter"));

app.listen(PORT, () =>
  console.log(`The server is listening at http://localhost:${PORT}`)
);
