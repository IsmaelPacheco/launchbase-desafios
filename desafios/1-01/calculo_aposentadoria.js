// Crie um programa para calcular a aposentadoria de uma pessoa.

const nome = "Alice";
const sexo = "F";
const idade = 65;
const contribuicao = 20;

console.log(console.log);

if (sexo == "M") {
  if (idade + contribuicao >= 95) {
    console.log(`${nome}, você pode se aposentar!`);
  } else {
    console.log(`${nome}, você não pode se aposentar!`);
  }
} else {
  if (idade + contribuicao >= 85) {
    console.log(`${nome}, você pode se aposentar!`);
  } else {
    console.log(`${nome}, você não pode se aposentar!`);
  }
}
