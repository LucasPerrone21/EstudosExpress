const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Qual sua linguagem fav?", (lang) => {
    console.log("troxão");
    readline.close();
});
