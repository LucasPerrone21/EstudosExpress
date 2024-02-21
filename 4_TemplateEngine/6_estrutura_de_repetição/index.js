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
