const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = express();
const cors = require("cors");
app.use(cors());

//connect database
connectDB();

app.use(
  express.json({
    extended: false,
  })
);

//define routes
app.use("/api/item", require("./routes/api/item"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
