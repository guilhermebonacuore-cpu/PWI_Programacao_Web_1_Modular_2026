
do {
    alert("Bem-Vindos a Aula de Switch Case. ")
    let num1 = Number(prompt("insira o primeiro número"))
    let num2 = Number(prompt("insira o segundo número"))
    let soma, mult

    let escolha = Number(prompt("Digite 1 Para Soma ou 2 multiplicação"))

    switch (escolha) {
        case 1: {
            soma = num1 = num2
            alert(`Você escolheu soma. A somas dos números é ${soma}`)
        }

            break
        case 2: {
            soma = num1 = num2
            alert(`Você escolheu Multiplicação. O produto dos números é ${mult}`)
        }
            break
        default: alert("ERRO! Opção Inválida")
    }
}
while ( )