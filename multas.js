/* Desenvolver um programa no qual o usuário digite o número de
multas que deseja cadastrar e para cada multa deve colocar o valor
em reais e os pontos perdidos na carteira de habilitação. Ao final,
mostrar o somatório das multas e dos pontos, caso os pontos
passem de 21, exibir a mensagem “Você está irregular”, senão,
exibir “Você está regular”. */

let qtdmultas = '' 
let valor = ''
let pontos = ''
let soma = 0
let valorTotal =  0

qtdmultas = Number(prompt('Quantas multas deseja cadastrar?'))
if (qtdmultas > 0){
for(i=0; i < qtdmultas; i++){

    
    pontos = Number(prompt('Digite os pontos da multa'))
    valor = Number(prompt('Digite o valor da multa'))

    soma = soma + pontos
    valorTotal = valorTotal + valor 

}

if (soma > 20){
    alert(`Situação irregular, você tem ${soma} pontos e deve ${valorTotal}R$ em multas!`)
}else{
    alert(`Situação regular, você tem ${soma} pontos e deve ${valorTotal}R$ em multas!`)
}

} else {
    alert('Digite um número válido de multas!')
}
