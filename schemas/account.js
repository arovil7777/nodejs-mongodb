const mongoose = require("mongoose");
const { Schema } = mongoose;

// "account"이라는 Schema 생성 (RDB의 테이블과 유사)
const accountSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        default: true
    },
    password: {
        type: String,
        required: true,
        default: true
    },
    name: {
        type: String,
        required: true,
        default: true
    },
    email: {
        type: String,
        required: true
    },
    insertDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("account", accountSchema);