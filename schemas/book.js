const mongoose = require("mongoose");
const { Schema } = mongoose;

// "book"이라는 Schema 생성 (RDB의 테이블과 유사)
const bookSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        default: true
    },
    author: {
        type: String,
        required: true
    },
    insertDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("book", bookSchema, "book");