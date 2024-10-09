/*Faça um algoritmo que receba a matrícula e duas notas do aluno. 
Calcular a média e mostrar a matrícula do aluno com as seguintes mensagens de acordo com os dados a seguir:
Fazer um vetor de objeto de aluno. O objeto aluno deve ter nome, nota1, noata2 e nota3. 
Ao final mostre a média geral dos alunos. */

let aluno = {
  nome: "Thor Odinson",
  matricula: 10102030,
  nota1: 80,
  nota2: 95,
  nota3: 70,
};

let media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;

console.log(`O aluno ${aluno.nome}
Número de matricula: ${aluno.matricula}`);

if (media > 70) {
  console.log(`Foi aprovado!`);
} else if (media == 70) {
  console.log(`Está em recuperação!`);
} else {
  console.log(`Foi reprovado!`);
}
