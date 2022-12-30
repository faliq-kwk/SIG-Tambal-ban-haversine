require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const HubungkanDatabase = require("./config/db");

// database connection
HubungkanDatabase();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", require('./routes/users'))
app.use("/api/auth", require('./routes/auth'))
app.use("/api/databengkel", require('./routes/DataRoute'))

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Listening on port ${port}...`));
