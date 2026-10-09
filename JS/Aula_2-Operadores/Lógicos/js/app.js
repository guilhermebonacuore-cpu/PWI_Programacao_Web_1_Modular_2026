/*
Operadores Lógicos
&& -> (and/e)
|| -> (or/ou)
! -> (not/negado)
*/

//Exemplos Simples
let num1 = 10
let num2 = 15
let num3 = 2

// Condição Composta
console.log("Condição Simples")
if((num1 != num2) && (num1>num3)){
    console.log("Entrou no If")
} else{
    console.log("Entrou no Else")
}

//Condição Tripla

console.log("Condição Simples")
if((num1 != num2) && (num1>num3) || (num1<num3)){
    console.log("Entrou no If")
} else{
    console.log("Entrou no Else")
}
