/*
Tipos de variáveis
let (É uma varíavel que pode mudar de valor)
Const (É uma variável que NÂO pode mudar de valor)
*/
const cpf = "23345928311"
console.log(cpf)
//cpf = "54354354332"
console.log(cpf) // Erro! Assignment to constant variable.(não aceito)
/*
Variáveis criadas fora de {} (Bloco de Instruções) são chamadas de variáveis de escopo global, ou seja, você pode usar a variável em qualquer parte do código

Variáveis criadas dentro {bloco} após a saída do bloco a variável é deletada
*/
// tipos de varíaveis - OBS: Em JS Não declarar o tipo ou tipagem
let num = 10 // varíaveis do tipo númerica são chamdas de " num "
let num2 = 10.5 // tipo double
let nome = "Guilherme" // string
let verdade = true // tipo boolean
let respostas // undefined
let saldo = null // Variável foi definida com valor nulo

// Como saber o tipo de variável 

console.log(typeof num1)
console.log(typeof num2)
console.log(typeof nome)
console.log(typeof verdade)
console.log(typeof resposta)
console.log(typeof saldo)

//