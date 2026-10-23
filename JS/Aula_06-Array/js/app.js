/*
Array em JavaScript

O que é?

Uma Váriavel armazena apenas 1 Valor, Enquanto o Array
Armazena Multíplos Valores


//ex01:
//estrutura

let frutas = ["Maça", "Banana" , "Uva" , "Morango"]

console.log(frutas)
//console.log(frutas[0])

// Pode usar LOOP para mostrar o ARRAY

for(let i = 0; i < frutas.length; i++){

    console.log(`${i + 1}° Fruta é ${frutas[i]}`)
}

//Pra toda quantidade no let frutas, adicione no LOOP também ou use frutas.leght

// MÉTODOS ARRAY
pop() - REMOVE O ITEM NO FIM DA FILA    
push() - ADICIONA UM ITEM NO FIM DA FILA 

shift() -  REMOVE UM ITEM NO INÍCIO DA FILA
unshift() - ADICIONA UM ITEM NO INÍCIO DA FILA

leght() - CONTA O TAMANHO DO ARRAY

*/

let frutas = ["Maça", "Banana" , "Uva"]
frutas.push("Morango")
frutas.push("Pêra")
frutas.unshift("Abacate")

console.log(frutas)
