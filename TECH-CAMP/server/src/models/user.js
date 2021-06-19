const mongoose = require("mongoose");

const Schema = new mongoose.schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    }
});

const User = mongoose.model("User", Schema);

module.exports = User;