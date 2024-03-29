const express = require("express");
const app = express();
const port = 12000;

const path = require("path");
const basePath = path.join(__dirname, "./templates");

const checkAuth = function (req, res, next) {
    req.authStatus = true;

    if (req.authStatus) {
        console.log("está Logado");
        next();
    } else {
        console.log("se logue poha");
    }
};

app.use(checkAuth);

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log(`app rodando na porta ${port}`);
});
