const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");

app.use(cors())
    .use(express.json())
    .use("/public", express.static(path.join(__dirname, "../public")))
    .use(express.static("../build"));

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});