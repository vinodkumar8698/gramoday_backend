const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({ path: "./config.env" });
require("./db/connectDB");
// backend server start
app.use(express.json());
app.use(cors());

app.use(require("../MarketReportBackend/auth"));
const Report = require("./reportSchema");

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

// backend server end
