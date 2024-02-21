const express = require("express");
const app = express();
const port = 12000;

const path = require("path");

const routerUsers = require("./users/index.js");

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

// arquivos estaticos

app.use(express.static("public"));

const basePath = path.join(__dirname, "./templates");

app.use("/users", routerUsers);

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log(`app rodando na porta ${port}`);
});
