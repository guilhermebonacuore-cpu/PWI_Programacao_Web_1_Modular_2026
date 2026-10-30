/*
Em JS podemos manipular a estrutura HTML através de eventos
1 - Click,  Disparado quando o usuário clica no elemento
*/

let titulo = document.getElementById('t1')
function alterarTítulo(){
    let novoTitulo = prompt ("Digite o novo título")
    titulo.textContent = novoTitulo


}

/*
2 - mousemove - Ativado continuamente enquanto o cursor se move sobre o elemento

*/

function mudarCor(){
    let blackDIv = document.getElementById('caixa')
    blackDIv.style.backgroundColor = "red"

}

function mudarCorSaida(){
let blackDIv = document.getElementById('caixa')
blackDIv.style.backgroundColor = "green"
}