const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());

app.set("view engine", "handlebars");

app.get("/", (req, res) => {
    const user = {
        name: "Lucas Perrone",
        age: 20,
    };

    res.render("home", { user: user, palavra: "testeee" });
});

app.listen(3000, () => {
    console.log("Tô rodando pai");
});
