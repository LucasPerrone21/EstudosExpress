const express = require("express");
const router = express.Router();
const path = require("path");

const basePath = path.join(__dirname, "../templates");

router.get("/add", (req, res) => {
    res.sendFile(`${basePath}/userform.html`);
});

// metodo POST

router.post("/save", (req, res) => {
    console.log(req.body);
    res.sendFile(`${basePath}/userform.html`);
});

module.exports = router;
