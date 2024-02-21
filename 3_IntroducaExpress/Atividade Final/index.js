const express = require("express");
const app = express();
const port = 5000;

const path = require("path");

const routerUsers = require("./users/index.js");
const routerProd = require("./produtos/index.js");

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
console.log("carreguei 1");
app.use("/produtos", routerProd);
console.log("carreguei 2");

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/userform.html`);
});

app.use((req, res, next) => {
    res.status(404).sendFile(`${basePath}/404.html`);
});

app.listen(port, () => {
    console.log(`app rodando na porta ${port}`);
});
