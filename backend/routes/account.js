const express = require("express")
const { authMiddleware } = require("../middleware")
const { Account } = require("../db")
const mongoose = require("mongoose")

const router = express.Router()

router.get("/balance", authMiddleware, async (req, res) => {

    const account = await Account.findOne({
        userId: req.userId
    })

    res.json({
        amount: account.balance
    })
})


router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession()

    session.startTransaction()
    const {to, amount} = req.body

    const fromAccount = await Account.findOne({
        userId: req.userId
    }).session(session)

    if(!fromAccount || fromAccount.balance < amount){
        await session.abortTransaction()
        return res.json({
            msg: "Insufficient balance"
        })
    }

    const toAccount = await Account.findOne({
        userId: to
    }).session(session)

    if(!toAccount){
        await session.abortTransaction()
        return res.json({
            msg: "Invalid account"
        })
    }

    await Account.updateOne({
        userId: req.userId
    },  {
        $inc: {
            balance: -amount
        }
    }).session(session)

    await Account.updateOne({
        userId: to
    }, {
        $inc: {
            balance: amount
        }
    }).session(session)

    await session.commitTransaction()

    res.json({
        msg: "transaction successful"
    })

})

module.exports = router