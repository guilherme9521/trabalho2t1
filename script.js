let idade = "26"
let idadeDois = "15"
let humano = (3 == 3)
let nome = "G"
let sobrenomeMais = "7"


if (idade >= 18){
    console.log(`Bem vindo a vida adulta`);
} else {
    console.log(`aproveite o máximo`);
}

if (idadeDois < 18 && humano == true){
    console.log(`Aproveite o máximo`);
} else {
    console.log(`Bem vindo a vida adulta`);
}

let mes = "Julho"

if (mes == "Janeiro" || mes == "Dezembro"){
    console.log("Parabens, você faz aniversário em Janeiro ou Dezembro");
} else {
    console.log("Você não faz aniversário em Janeiro ou Dezembro :(");
}

if (nome == "R"){
    console.log("Seu nome começa com a letra G");
} else {
    console.log("não identificado");
}

if (nome == "E" || sobrenomeMais == "7"){
    console.log("Parabens seu sobrenome tem mais de 6 ou seu nome começa com a letra E");
} else {
    console.log("Seu sobrenome não possui mais de 6 letras ou não começa coma letra E");
}