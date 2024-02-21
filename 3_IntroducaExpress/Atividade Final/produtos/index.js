const express = require("express");
const path = require("path");
const router = express.Router();

const basePath = path.join(__dirname, "../templates");

router.get("/add", (req, res) => {
    res.sendFile(`${basePath}/produtoform.html`);
});

router.post("/save", (req, res) => {
    console.log(req.body);
    res.sendFile(`${basePath}/produtoform.html`);
});

module.exports = router;
