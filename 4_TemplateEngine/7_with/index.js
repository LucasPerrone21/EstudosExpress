const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
    const itens = [
        "itemA",
        "itemB",
        "itemC",
        "itemD",
        "itemE",
        "itemF",
        "itemG",
        "itemH",
    ];
    res.render("dashboard", { itens });
});

app.get("/post", (req, res) => {
    const post = {
        title: "O porquê de JavaScript ser tão amado",
        category: "JavaScript",
        body: "lorem Ipsum iopasudfhsujidhbf 89uaey f yuisd aydtgfu8iy asuiyasdg futg adf...",
        comments: 23,
        author: "Lucas Perrone",
    };

    res.render("blogpost", { post });
});

app.get("/", (req, res) => {
    const user = {
        name: "Lucas Perrone",
        email: "luquetalidao2012@hotmail.com",
    };

    const auth = true;

    const approved = false;

    res.render("home", { user: user, auth, approved });
});

app.listen(3000, () => {
    console.log("Tô rodando pai");
});
