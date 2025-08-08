const express = require("express")
const userRouter = require("./user")
const accountRouter = require("./account")

const router = express.Router()

router.use("/user", userRouter)
router.use("/account", accountRouter)

router.get("/", (req, res) => {
    res.json({
        msg: "Hey there from route/index"
    })
})



module.exports = router