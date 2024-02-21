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

router.get("/:id", (req, res) => {
    const id = req.params.id;

    // resgatar o user no BD

    console.log(`resgatando usuario ${id}`);

    res.sendFile(`${basePath}/users.html`);
});

module.exports = router;
