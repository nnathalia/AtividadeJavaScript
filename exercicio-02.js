/* 2. Crie uma variável para receber o salário de um funcionário e aumentá-lo em 20%. 
Após o aumento, calcule o INSS desse funcionário que é de 8%. mostre o salário inicial, 
o salário com o aumento e o desconto do INSS o salário final. */

let funcionario = "Tony Stark";
let salarioInicial = 5000;

let salarioAumento = salarioInicial + salarioInicial * 0.2;
let inss = salarioInicial * 0.08;
let salarioFinal = salarioAumento - inss;

console.log(`Funcionário: ${funcionario} 
Salário inicial: ${salarioInicial} 
Salário com aumento: ${salarioAumento} 
Desconto INSS: ${inss}
Salário final: ${salarioFinal}
`);
