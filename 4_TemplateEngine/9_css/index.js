const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.get("/blog", (req, res) => {
    const posts = [
        {
            title: "Item 1",
            category: "JavaScript",
            body: "Asserere ha dere derrebe tu derrebe seibilnoba manabi ande buggi ande gudilpi",
            comments: 5,
        },
        {
            title: "The Benefits of Regular Exercise",
            category: "Health",
            body: "Regular exercise has numerous benefits for both physical and mental health.",
            comments: 42,
            author: "John Doe",
        },
        {
            title: "The Importance of Sleep",
            category: "Wellness",
            body: "Getting enough sleep is crucial for overall well-being and cognitive function.",
            comments: 17,
            author: "Jane Smith",
        },
        {
            title: "The Power of Positive Thinking",
            category: "Self-Improvement",
            body: "Positive thinking can lead to improved mental health and increased resilience.",
            comments: 31,
            author: "Alex Johnson",
        },
        {
            title: "The Art of Time Management",
            category: "Productivity",
            body: "Effective time management skills can help individuals achieve their goals and reduce stress.",
            comments: 25,
            author: "Sarah Williams",
        },
        {
            title: "The Joy of Cooking",
            category: "Food",
            body: "Cooking can be a creative and enjoyable activity that brings people together.",
            comments: 12,
            author: "Michael Brown",
        },
        {
            title: "Exploring Nature's Wonders",
            category: "Travel",
            body: "Traveling to natural landscapes can inspire awe and appreciation for the world around us.",
            comments: 8,
            author: "Emily Davis",
        },
        {
            title: "The Benefits of Mindfulness",
            category: "Mental Health",
            body: "Practicing mindfulness can help reduce stress and improve overall well-being.",
            comments: 19,
            author: "David Wilson",
        },
        {
            title: "The Thrill of Adventure Sports",
            category: "Sports",
            body: "Engaging in adventure sports can provide an adrenaline rush and a sense of accomplishment.",
            comments: 14,
            author: "Sophia Thompson",
        },
        {
            title: "The Impact of Technology on Society",
            category: "Technology",
            body: "Technology has revolutionized various aspects of society, from communication to healthcare.",
            comments: 37,
            author: "Daniel Lee",
        },
        {
            title: "The Beauty of Artistic Expression",
            category: "Art",
            body: "Artistic expression allows individuals to convey emotions and perspectives in unique ways.",
            comments: 23,
            author: "Olivia Martinez",
        },
    ];

    res.render("blog", { posts });
});

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
