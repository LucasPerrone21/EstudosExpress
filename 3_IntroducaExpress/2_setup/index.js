const express = require("express");
const app = express();
const port = 12000;

app.get("/", (req, res) => {
    res.send("Olá Mundo");
});

app.listen(port, () => {
    console.log(`app rodando na porta ${port}`);
});
