const express = require("express");
const account = require("../schemas/account");
const routers = express.Router();

// account collection 데이터 삽입
routers.post("/sign-up", (req, res, next) => {
    const { id, password, name, email } = req.body;
    const accountValues = new book({
        id,
        password,
        name,
        email
    });

    accountValues.save().then(result => {
        console.log("Insert Success");
        res.json(result);
    }).catch(error => {
        console.error(`Insert Error: ${error}`);
    })
});

// account collection 조회
routers.get("/sign-in", (req, res, next) => {
    account.find().then(result => {
        console.log(result);
        res.json(result);
    }).catch(error => {
        console.error(`Find Error: ${error}`)
    });
});
module.exports = routers;