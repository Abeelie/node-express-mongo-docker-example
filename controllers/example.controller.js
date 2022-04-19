"use strict";

const asyncHandler = require('express-async-handler');

const getExample = asyncHandler(async (req, res) => {
    console.log(1)
})


module.exports = {
    getExample
}