const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://paytm:lgph7Kq8Mei7VObG@cluster0.2ug3k.mongodb.net/")

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String
    
})

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

const User = mongoose.model("User", userSchema)
const Account = mongoose.model("Account", accountSchema)

module.exports = {
    User,
    Account
}