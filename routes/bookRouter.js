const express = require("express");
const book = require("../schemas/book");
const routers = express.Router();

// book collection 조회
routers.get("/book", (req, res, next) => {
    book.find().then(result => {
        console.log(result);
        res.json(result);
    }).catch(error => {
        console.error(`Find Error: ${error}`)
    });
});

// book collection 데이터 삽입
routers.post("/book", (req, res, next) => {
    const { name, author, insertDate } = req.body;
    const bookValues = new book({
        name,
        author,
        insertDate
    });

    bookValues.save().then(result => {
        console.log("Insert Success");
        res.json(result);
    }).catch(error => {
        console.error(`Insert Error: ${error}`);
    })
});

module.exports = routers;