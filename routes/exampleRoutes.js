"use strict"

const express = require("express");
const router = express.Router();
const {getExample} = require("../controllers/example.controller"); 

router.get("/", getExample);


module.exports = router;