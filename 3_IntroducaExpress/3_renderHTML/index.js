const express = require("express");
const app = express();
const port = 12000;

const path = require("path");
const basePath = path.join(__dirname, "./templates/Calculadora-JS");

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/MATC82-TrabalhoPratico02.pdf`);
});

app.listen(port, () => {
    console.log(`app rodando na porta ${port}`);
});
