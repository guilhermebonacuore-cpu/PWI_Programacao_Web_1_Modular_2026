/*
Funções em JavaScript

o que é?
Funções são blocos de códigos reutilizados

 

//Funções Simples:
console.log("Funções Simples")

//Estrutura da função
function saudacao(){
    console.log("Seja Bem-Vindo Usuário")
}
//A função só executa quando é chamada

//SAUDACAO()



//FUNÇÕES COM PARÂMETROS

let Usuário = prompt("Qual é o seu Nome?")
//let usuario é para definir parametro q for digitado (USUARIO)
function saudacaoUser(Nome){
    console.log(`Seja Bem-Vindo ${Nome}`)
}

saudacaoUser(Usuário)


//funções com retorno (Devolver os Dados)
function media(n1,n2,n3){
   return (n1 + n2 + n3)/3

}

console.log (media (7.5,8.5,3.2))

*/

//Função arrow Function

let mult = (n1,n2)=>{
    return n1 * n2
}
console.log(mult(20,10))
 


