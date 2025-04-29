const { createOtp, verifyOtp } = require("../controller/otp.controller")



const router = require("express").Router()


router.post("/createotp", createOtp )
router.post("/verifyotp", verifyOtp )

module.exports = router