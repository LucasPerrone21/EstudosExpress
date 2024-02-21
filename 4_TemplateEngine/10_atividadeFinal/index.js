const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.static("public"));

const items = [
    {
        name: "Xbox Series X",
        description: "Poderosíssimo console da Microsoft de nova geração",
        price: "R$ 4700,90",
        id: 0,
    },
    {
        name: "Playstation 5 Slim",
        description: "Mais novo sucesso da Sony",
        price: "R$ 3799,99",
        id: 1,
    },
    {
        name: "Xbox Series X",
        description: "O console mais poderoso da Microsoft",
        price: "R$ 4499,99",
        id: 2,
    },
    {
        name: "Nintendo Switch",
        description: "A versatilidade em suas mãos",
        price: "R$ 1999,99",
        id: 3,
    },
    {
        name: "iPhone 12 Pro",
        description: "A câmera mais avançada em um iPhone",
        price: "R$ 7999,99",
        id: 4,
    },
    {
        name: "Samsung Galaxy S21",
        description: "Desempenho e inovação em um só aparelho",
        price: "R$ 5999,99",
        id: 5,
    },
    {
        name: "MacBook Pro",
        description: "Potência e portabilidade para profissionais",
        price: "R$ 9999,99",
        id: 6,
    },
    {
        name: "Dell XPS 13",
        description: "O notebook mais compacto e poderoso",
        price: "R$ 6999,99",
        id: 7,
    },
    {
        name: "Sony WH-1000XM4",
        description: "Cancelamento de ruído premium",
        price: "R$ 1499,99",
        id: 8,
    },
    {
        name: "Logitech G Pro X",
        description: "Headset gamer de alta qualidade",
        price: "R$ 699,99",
        id: 9,
    },
];

app.get("/", (req, res) => {
    res.render("home", { items });
});

app.get("/produtos/:id", (req, res) => {
    const product = items[req.params.id];
    console.log(product);
    res.render("produto", { product });
});

app.listen(3000, () => {
    console.log("Tô rodando pai");
});
