const numeros = document.querySelectorAll(".numeros");
const operadoresBinarios = document.querySelectorAll(".operacaoBinaria");
const operadoresUnarios = document.querySelectorAll(".operacaoUnaria");
const parenteses = document.querySelectorAll(".parenteses");
const tela = document.querySelector(".contaAtual");
const igual = document.querySelector(".igual");
const historico = document.querySelector(".contaHistorico");

// definindo os tipos de delete

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    tela.value = "";
    historico.value = "";
});

const deleteButton = document.querySelector(".delete");
deleteButton.addEventListener("click", () => {
    tela.value = "";
});

// Definindo os operadores unarios

operadoresUnarios.forEach((botao) => {
    botao.addEventListener("click", () => {
        try {
            if (botao.innerHTML == "x²") {
                if (tela.value == "Erro de Sintaxe" || tela.value == "") {
                    tela.value = "Erro de Sintaxe";
                } else {
                    let valor = eval(tela.value);
                    valor *= valor;
                    historico.value += ` (${tela.value})² = ${valor}\n`;
                    tela.value = valor;
                }
            } else if (botao.innerHTML == "√x") {
                if (tela.value == "Erro de Sintaxe" || tela.value == "") {
                    tela.value = "Erro de Sintaxe";
                } else {
                    let valor = eval(tela.value);
                    if (valor < 0) {
                        tela.value = "Erro de Sintaxe";
                    } else {
                        valor = Math.sqrt(valor);
                        historico.value += ` √(${tela.value}) = ${valor}\n`;
                        tela.value = valor;
                    }
                }
            } else if (botao.innerHTML == "x!") {
                if (tela.value == "Erro de Sintaxe" || tela.value == "") {
                    tela.value = "Erro de Sintaxe";
                } else {
                    let valor = eval(tela.value);
                    let factorial = 1;
                    if (valor == 0) {
                        tela.value = 1;
                        historico.value += ` ${valor}! = 1\n`;
                    } else if (valor < 0) {
                        tela.value = "Erro de Sintaxe";
                    } else {
                        if (valor % 1 == 0) {
                            for (let i = 1; i <= valor; i++) {
                                factorial *= i;
                            }

                            historico.value += ` (${valor})! = ${factorial}\n`;
                            tela.value = factorial;
                        } else {
                            tela.value = "Erro de Sintaxe";
                        }
                    }
                }
            }
        } catch (e) {
            tela.value = "Erro de Sintaxe";
        }
    });
});

// Definindo os oeperadores binarios

operadoresBinarios.forEach((botao) => {
    botao.addEventListener("click", () => {
        tela.value += botao.innerHTML;
    });
});

// Definindo o igual

igual.addEventListener("click", () => {
    try {
        valor = eval(tela.value);
        if (valor == undefined) {
            valor = "";
        } else {
            historico.value += ` ${tela.value} = ${valor}\n`;
            tela.value = valor;
        }
    } catch (e) {
        tela.value = "Erro de Sintaxe";
    }
});

numeros.forEach((botao) => {
    botao.addEventListener("click", () => {
        if (tela.value == "Erro de Sintaxe") {
            tela.value = "";
            tela.value += botao.innerHTML;
            console.log(tela.value);
        } else {
            tela.value += botao.innerHTML;
            console.log(tela.value);
        }
    });
});
