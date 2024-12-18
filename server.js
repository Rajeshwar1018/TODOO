// const express = require('express');
// const bodyParser = require('body-parser');
// const routers=require("./routes/routes")

// const app = express();
// app.use(bodyParser.json());

// app.use("/api", routers)
// const PORT=2802

// app.listen(PORT, (err) => {
//     if (err) {
//         console.error("Error starting server:", err);
//     } else {
//         console.log(`Server is running on http://localhost:${PORT}`);
//     }
// });

require('dotenv').config();
const express = require('express');
const routers = require('./routes/routes'); // Your route handlers

const app = express();
app.use(express.json()); // Use built-in JSON middleware

app.use('/api', routers);

const PORT = process.env.PORT || 2802;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
