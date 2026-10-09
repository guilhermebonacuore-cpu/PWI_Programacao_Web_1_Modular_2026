let num1 = 10
let num2 = 2

//let soma = num1 + num2
let sub = num1 - num2
let mult = num1 * num2
let div = num1 / num2
let resto = num1 % num2
let exp = num1 ** num2
let porcento = num1*(num2/100)

console.log(soma)
console.log(sub)
console.log(mult)
console.log(div)
console.log(resto)
console.log(exp)
console.log(porcento)

//interação com usuário
//mandar alerta na tela
//alert("")

//Receber dados do usuário

let nome = prompt("Olá, Qual é o seu nome?" )
let nota1 = prompt("Informe a Primeira Nota")
let nota2 = prompt("Informe a Segunda Nota")
let nota3 = prompt("Informe a Terceira Nota")
soma = nota1 + nota2
alert(`Olá, ${nome} seja bem-vindo! A Soma de suas notas é: ${soma}`)
console.log(`Olá, ${nome} seja bem-vindo! A Soma de suas notas é: ${soma}`)