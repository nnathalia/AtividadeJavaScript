/*Três amigos, Carlos, André e Felipe. decidiram rachar igualmente a conta de um bar. 
Faça um algoritmo para ler o valor total da conta e imprimir quanto cada um deve pagar, mas faça com que Carlos e André não paguem centavos. 
Ex: uma conta de R$101,53 resulta em R$33,00 para Carlos, R$33,00 para André e R$35,53 para Felipe. */

let valorConta = 101.53;
let sobra = valorConta % 3;
let valorPagar = Math.floor(valorConta / 3);
let valorFelipe = sobra + valorPagar;

console.log(`O valor total é ${valorConta}
  O total a pagar de cada um é:
  Felipe: ${valorFelipe}
  Carlos: ${valorPagar}
  André: ${valorPagar}`
);
