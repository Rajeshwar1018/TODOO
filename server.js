const express = require('express');
const bodyParser = require('body-parser');
const routers=require("./routes/routes")

const app = express();
app.use(bodyParser.json());

app.use("/api", routers)
const PORT=2818

app.listen(PORT, (err) => {
    if (err) {
        console.error("Error starting server:", err);
    } else {
        console.log(`Server is running on http://localhost:${PORT}`);
    }
});