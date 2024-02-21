const express = require("express");
const app = express();
const port = 12000;

const path = require("path");
const basePath = path.join(__dirname, "./templates");

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

app.get("/users/add", (req, res) => {
    res.sendFile(`${basePath}/userform.html`);
});

// metodo POST

app.post("/users/save", (req, res) => {
    console.log(req.body);
    res.sendFile(`${basePath}/userform.html`);
});

app.get("/users/:id", (req, res) => {
    const id = req.params.id;

    // resgatar o user no BD

    console.log(`resgatando usuario ${id}`);

    res.sendFile(`${basePath}/users.html`);
});

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log(`app rodando na porta ${port}`);
});
