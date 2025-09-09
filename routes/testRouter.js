const express = require("express")
const { testController } = require("../controllers/testContraller")

const router = express.Router()



router.get("/", testController)

module.exports= router