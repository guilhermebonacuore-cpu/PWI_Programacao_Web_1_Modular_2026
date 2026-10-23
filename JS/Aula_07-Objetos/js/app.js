/*
Objetos armazenam dados que organizados com chave e valor 
ex01:
*/

let aluno = {
    nome: "Guilherme",
    sobrenome: "Bispo",
    funcao: "Aluno"
}
//Com LOOP FOR IN Conseguimos percorrer o objeto
for(let chave in aluno){
console.log(`${chave}: ${aluno[chave]}`)

}
