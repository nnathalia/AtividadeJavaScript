/*Uma fábrica de camisetas produz os tamanhos pequeno, médio e grande, cada uma sendo vendida respectivamente por 10, 12 e 15 reais.
 Construa um algoritmo em que o usuário forneça a quantidade de camisetas pequenas, médias e grandes referentes a uma venda, 
 e a máquina informe quanto será o valor arrecadado. */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const valorCamisetaP = 10;
const valorCamisetaM = 12;
const valorCamisetaG = 15;

rl.question("Qual a quantidade de camisetas tamanho P? ", (quantCamisetaP) => {
  rl.question(
    "Qual a quantidade de camisetas tamanho M? ",
    (quantCamisetaM) => {
      rl.question(
        "Qual a quantidade de camisetas tamanho G? ",
        (quantCamisetaG) => {
          let valorVenda =
            quantCamisetaP * valorCamisetaP +
            quantCamisetaM * valorCamisetaM +
            quantCamisetaG * valorCamisetaG;

          console.log(`O valor arrecadado com a venda foi de R$${valorVenda}`);
          rl.close();
        }
      );
    }
  );
});
