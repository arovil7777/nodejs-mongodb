const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Express 통신 시 JSON 형식으로 데이터 통신
app.use(express.json());

// MongoDB 연결 정보
const MONGO_DB_URL = "mongodb://localhost:27017";
const MONGO_DB_NAME = "mongoTest";

// Express 서버 포트
const EXPRESS_PORT = 7777;

// MongoDB 연결
mongoose.connect(MONGO_DB_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    dbName: MONGO_DB_NAME
}).then(() => {
    console.log("MongoDB Connected...");
}).catch(error => {
    console.error(`MongoDB Connection Error: ${error}`);
});

app.get("/", (req, res) => {
    res.send("Hello!!!");
});

app.listen(EXPRESS_PORT, () => {
    console.log(`Server Started... Port: ${EXPRESS_PORT}`);
});

app.use("/", require("./routes/bookRouter"));