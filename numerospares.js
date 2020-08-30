let impar = false;
let soma = 0;

for (let i=1; i <= 5;i++){
    let  num = Number (prompt("Digite um número par"))

    if (num % 2 == 0){

    soma = soma + num
    
    } else{
        impar = true
    }

}

if (impar == true){

    alert("Número impar detectado! ")

} else{
    alert(`A média dos alunos é igual a ${soma / 5}`)
}