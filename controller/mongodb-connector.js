const mongoose = require("mongoose");

const connect = () => {
    // MongoDB 연결
    mongoose.connect("mongodb://ID:PW@localhost:27017/DB?authSource=admin");
};

// MongoDB 연결 시 에러 처리
mongoose.connection.on("error", error => {
    console.error("MongoDB Connection Error", error);
});

// MongoDB 연결이 끊어졌을 경우 처리
mongoose.connection.on("disconnected", () => {
    console.error("MongoDB Disconnected, retry...");
    connect();
});

module.exports = connect;