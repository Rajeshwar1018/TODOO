const express = require('express');
const router = express.Router();
const creattaskcontroller=require("../controller/createtask")

router.post('/inserttask', creattaskcontroller.createTask)

module.exports = router
